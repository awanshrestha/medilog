const md5 = require("md5");

module.exports.index = (req,res)=>{
    pool.query("SELECT * FROM patient WHERE patient_id =? ",[req.cookies.patientId],(error,results)=>{
        if(error) throw error;
        pool.query('SELECT * FROM disease WHERE patient_id = ?', [req.cookies.patientId], (error, diseaseResults) => {
          data = { patient : results[0], diseaseResults}
          res.render("./patient/index .ejs",data);
        });
    })
}

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
      data = {patient : patientinfo[0], description}
      res.render("./patient/dashboard.ejs",data);
    })
  })

}
module.exports.patienthistory = (req,res) =>{
  res.render("./patient/history.ejs");
}
module.exports.labtests = (req,res) =>{
  res.render("./patient/labtests.ejs");
}
module.exports.medication = (req,res) =>{
  res.render("./patient/medication.ejs");
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

