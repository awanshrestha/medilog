const md5 = require("md5");

module.exports.adminpage = (req,res)=>{
   var error = (req.cookies.error) ? req.cookies.error : "";
    res.clearCookie("error");
    res.render("./admin/index.ejs",{
        error: error
    });
}

module.exports.getAdminLogin = (req,res)=>{
    var error = (req.cookies.error) ? req.cookies.error : "";
    res.clearCookie("error");
    res.render("./admin/login.ejs",{
        error: error
    });
}

module.exports.postAdminLogin = (req,res)=>{
    pool.query("SELECT * FROM admin WHERE username = ? AND password = ?",[req.body.username,md5(req.body.password)],(error,results)=>{
        if (error) throw error;
        if (results.length > 0){
            var adminId = results[0].id;
            var hash = md5(Date.now());
            res.cookie("adminId",adminId,{maxAge: 86400000});
            res.cookie("adminHash",hash,{maxAge: 86400000});
            pool.query("INSERT INTO sessions (admin_id, hash) VALUES (?,?)",[adminId, hash],(error,results)=>{
                if(error) throw error;
            });
            
            // Redirect
            res.redirect("/admin");
        }
        else{
            // Redirect
            res.cookie("error","Login Failed");
            res.redirect("/admin/login");
           
        }
    });
}

module.exports.authenticateAdmin = (req, res, next) => {
    pool.query("SELECT COUNT(*) as num FROM sessions WHERE admin_id = ? AND hash = ?",[req.cookies.adminId, req.cookies.adminHash], (error, results) => {
      if (error) throw error;
        if (results[0].num > 0) {
          next();
        } else{
          res.redirect("/admin/login");
        }
    });
  };

module.exports.checkLogin = (req, res, next)=>{
    if(req.cookies.adminId==null){
        next();
    }
    else{
        res.redirect("/admin");
    }
}

module.exports.postAddAdmin = (req,res)=>{
    req.body.adminPassword = md5(req.body.adminPassword);
    pool.query("INSERT INTO admin (username, password) VALUES (?,?)",[req.body.newAdmin,req.body.adminPassword],(error,results)=>{
        if(error) throw error;
        res.redirect("/admin");
    })
}

module.exports.postResetPassword = (req,res)=>{
    req.body.oldPassword = md5(req.body.oldPassword);
    req.body.newPassword = md5(req.body.newPassword);
    pool.query("SELECT id FROM admin WHERE id=? AND password=? ",[req.cookies.adminId, req.body.oldPassword],(error,results)=>{
        if(error) {
            throw error; 
        }
        if(results.length > 0){
            pool.query("UPDATE admin SET password = ? WHERE id = ?",[req.body.newPassword,req.cookies.adminId],(error,results)=>{
                if(error) throw error;
                res.redirect("/admin");
            })
        }
        else{          
            res.cookie("error","Current Password Wrong");
            res.redirect("/admin");
        }
    })
}



module.exports.postAdminLogout = (req,res)=>{
      pool.query("DELETE FROM sessions WHERE admin_id = ?",[req.cookies.adminId],(error,results)=>{
        if(error) throw error;
      })
      res.clearCookie("adminId");
      res.clearCookie("adminHash");
      res.redirect("/admin/login");
}

module.exports.getAddPatient = (req,res)=>{
    res.render("./admin/addpatient.ejs");
}

module.exports.getAddDoctor = (req,res)=>{
    res.render("./admin/adddoctor.ejs");
}

module.exports.postAddPatient = (req,res)=>{
    req.body.patientPassword = md5 (req.body.patientPassword);
    pool.query("INSERT INTO patient (name,email,password,age,gender,address,contact_no) VALUE (?,?,?,?,?,?,?)",[req.body.patientName,req.body.patientEmail,req.body.patientPassword,req.body.patientAge,req.body.patientGender,req.body.patientAddress,req.body.patientContactNo],(error,results)=>{
        if(error) throw error;
    })
    res.redirect("/admin/patientAdded");
}

module.exports.postAddDoctor = (req,res)=>{
    req.body.doctorPassword = md5 (req.body.doctorPassword);
    pool.query("INSERT INTO doctor (name,email,password,nmc_no,description,address,contact_no) VALUE (?,?,?,?,?,?,?)",[req.body.doctorName,req.body.doctorEmail,req.body.doctorPassword,req.body.nmc,req.body.doctorDescription,req.body.doctorAddress,req.body.doctorContactNo],(error,results)=>{
        if(error) throw error;
    })
    res.redirect("/admin/doctorAdded");
}


module.exports.patientAdded = (req,res)=>{
    res.render("./admin/patientadded.ejs");
}

module.exports.doctorAdded = (req,res)=>{
    res.render("./admin/doctoradded.ejs");
}