const md5 = require("md5");

var patient = {}
module.exports.dashboard = (req,res)=>{
    pool.query("SELECT * FROM patient WHERE patient_id =?",[req.cookies.patientId],(error,results)=>{
        if(error) throw error;
        patient = { print: results[0]}
    })
    res.render("./patient/index.ejs",patient);
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