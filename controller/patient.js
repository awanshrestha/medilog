const md5 = require("md5");

module.exports.getPatientLogin = (req,res)=>{
    var error = (req.cookies.error) ? req.cookies.error : "";
    res.clearCookie("error");
    res.render("./patient/login.ejs",{
        error: error
    });
}

module.exports.postPatientLogin = (req,res)=>{
    pool.query("SELECT * FROM patient WHERE email = ? AND password = ?",[req.body.patientEmail,md5(req.body.patientPassword)],(error,results)=>{
        if (error) throw error;
        if (results.length > 0){
            var patientId = results[0].patient_id;
            var hash = md5(Date.now());
            res.cookie("patientId",patientId,{maxAge: 86400000});
            res.cookie("patientHash",hash,{maxAge: 86400000});
            pool.query("INSERT INTO sessions (patient_id, hash) VALUES (?,?)",[patientId, hash],(error,results)=>{
                if(error) throw error;
            });

            // Redirect
            res.redirect("/patient");
        }
        else{
            // Redirect
            res.cookie("error","Login Failed");
            res.redirect("/patient/login");

        }
    });
}

module.exports.authenticatePatient = (req, res, next) => {
    pool.query("SELECT COUNT(*) as num FROM sessions WHERE patient_id = ? AND hash = ?",[req.cookies.patientId, req.cookies.patientHash], (error, results) => {
      if (error) throw error;
        if (results[0].num > 0) {
          next();
        } else{
          res.redirect("/patient/login");
        }
    });
  };

module.exports.checkLogin = (req, res, next)=>{
    if(req.cookies.patientId==null){
        next();
    }
    else{
        res.redirect("/patient");
    }
}


module.exports.postPatientLogout = (req,res)=>{
    pool.query("DELETE FROM sessions WHERE patient_id = ?",[req.cookies.patientId],(error,results)=>{
        if(error) throw error;
      })
    res.clearCookie("patientId");
    res.clearCookie("patientHash");
    res.redirect("/patient/login");
}

module.exports.dashboard = (req,res) =>{
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[req.cookies.patientId],(error,patientinfo)=>{
    if(error) throw error;
    pool.query("SELECT * FROM description WHERE patient_id=?",[req.cookies.patientId],(error,description)=>{
      if(error){ throw error; }
      pool.query("SELECT * FROM appointment WHERE patient_id=?",[req.cookies.patientId],(error,appointment)=>{
        if(error){ throw error; }
        data = {patient : patientinfo[0]|| [], description : description|| [],appointment : appointment || []}
      res.render("./patient/dashboard.ejs",data);

      })

    })
  })

}
module.exports.patienthistory = (req,res) =>{
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[req.cookies.patientId],(error,patientinfo)=>{
    if(error) throw error;
    pool.query("SELECT * FROM diagnosis WHERE patient_id=?",[req.cookies.patientId],(error,diagnosis)=>{
      data = {patient : patientinfo[0]|| [], diagnosis : diagnosis|| []}
      res.render("./patient/history.ejs",data);
    })
  })
}
module.exports.labtests = (req,res) =>{
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[req.cookies.patientId],(error,patientinfo)=>{
    if(error) throw error;
    pool.query("SELECT * FROM labtests WHERE patient_id=?",[req.cookies.patientId],(error,labtests)=>{
      data = {patient : patientinfo[0]|| [], labtests : labtests|| []}
      res.render("./patient/labtests.ejs",data);
    })
  })
}
module.exports.medication = (req,res) =>{
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[req.cookies.patientId],(error,patientinfo)=>{
    if(error) throw error;
    pool.query("SELECT * FROM medications WHERE patient_id=?",[req.cookies.patientId],(error,medications)=>{
      data = {patient : patientinfo[0]|| [], medications : medications|| []}
      res.render("./patient/medication.ejs",data);
    })
  })
}
module.exports.settings = (req,res) =>{
  var profileupdate = (req.cookies.updateProfileSuccess) ? req.cookies.updateProfileSuccess : "";
  res.clearCookie("updateProfileSuccess");
    var passworderror = (req.cookies.changePasswordError) ? req.cookies.changePasswordError : "";
    res.clearCookie("changePasswordError");
    var passwordchanged = (req.cookies.changePasswordSuccessful) ? req.cookies.changePasswordSuccessful : "";
    res.clearCookie("changePasswordSuccessful");
    pool.query("SELECT * FROM patient WHERE patient_id=?",[req.cookies.patientId],(error,patientdata)=>{
      if(error) throw error;
      data = { profileupdate : profileupdate ,passworderror : passworderror, passwordchanged : passwordchanged,patient: patientdata[0]}
      res.render("./patient/settings.ejs",data);
    })
}

module.exports.postResetPassword = (req,res)=>{
  req.body.oldPassword = md5(req.body.oldPassword);
  req.body.newPassword = md5(req.body.newPassword);
  pool.query("SELECT patient_id FROM patient WHERE patient_id=? AND password=? ",[req.cookies.patientId, req.body.oldPassword],(error,results)=>{
      if(error) {
          throw error;
      }
      if(results.length > 0){
          pool.query("UPDATE patient SET password = ? WHERE patient_id = ?",[req.body.newPassword,req.cookies.patientId],(error,results)=>{
              if(error) throw error;
              res.cookie("changePasswordSuccessful","Password Changed Successfully");
              res.redirect("/patient/settings");
          })
      }
      else{
          res.cookie("changePasswordError","Current Password Wrong");
          res.redirect("/patient/settings");
      }
  })
}

module.exports.postUpdateProfile = (req,res)=>{
  pool.query("UPDATE patient SET address=?, contact_no=?, email=? WHERE patient_id=?",[req.body.patientAddress,req.body.patientContactNo,req.body.patientEmail,req.cookies.patientId],(error,results)=>{
      if (error) throw error;
      res.cookie("updateProfileSuccess","Profile Successfully Updated");
      res.redirect("/patient/settings");
  });
}

module.exports.forgotPassword = (req,res)=>{
  var nomail = (req.cookies.nomail) ? req.cookies.nomail : "";
    res.clearCookie("nomail");
    res.render("./patient/forgotpassword.ejs",{
      nomail: nomail
    });
}

module.exports.postForgotPassword = (req,res)=>{
  var code = md5(Date.now()).slice(0,6);

  var mail = "Dear user, Here is your verification code " + code;

  const nodemailer = require("nodemailer");
  async function main(){
  let account = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "facebookpage1001@gmail.com" ,
      pass: "nepal2019"
    }
  });

  let mailOptions = {
    from: '"Medilog" <admin@medilog.com>',
    to: req.body.useremail,
    subject: "Reset Password",
    text: mail,
    html: "<a href='http://localhost:3000/patient/verify_code/"+req.body.useremail+"/"+code+"'>http://localhost:3000/patient/verify_code/"+req.body.useremail+"/"+code+"</a>"
  };
  let info = await transporter.sendMail(mailOptions)
  }
  main().catch(console.error);
  pool.query("SELECT * FROM patient WHERE email = ?",[req.body.useremail],(error,results)=>{
    if(error) throw error;
    if(results.length==0){
      res.cookie("nomail","No such email address found.");
      res.redirect("/patient/forgot_password");
    }
    else{
      pool.query("UPDATE patient SET vcode = ? WHERE email =?",[code,req.body.useremail],(error,results)=>{
        if (error) throw error;
        res.send("Check your email for verification link.");
      })
    }
  })
}

module.exports.verifyCode = (req,res)=>{
  res.render("./patient/verification.ejs");
}

module.exports.postVerifyCode = (req,res)=>{
  req.body.password = md5(req.body.password);
  req.body.password2 = md5(req.body.password2);
  if(req.body.password==req.body.password2){
    pool.query("SELECT * FROM patient WHERE email = ? AND vcode = ?",[req.params.useremail,req.params.vcode],(error,results)=>{
      if(error) throw error;
      if (results.length>0){
        pool.query("UPDATE patient SET password = ? WHERE email = ?",[req.body.password,req.params.useremail],(error,results)=>{
          if(error) throw error;
          else{ res.send("Password Changed Successfully.");}
        })
      }
      else{
        res.send("Verification Code Wrong.");
      }
    })
  }
  else{
    res.send("Passwords are not matching");
  }
}


