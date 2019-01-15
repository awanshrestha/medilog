const md5 = require("md5");
var doctor = {}
module.exports.dashboard = (req,res)=>{
    res.render("./doctor/index.ejs");
}

module.exports.getDoctorLogin = (req,res)=>{
    var error = (req.cookies.error) ? req.cookies.error : "";
    res.clearCookie("error");
    res.render("./doctor/login.ejs",{
        error: error
    });
}

module.exports.postDoctorLogin = (req,res)=>{
    pool.query("SELECT * FROM doctor WHERE email = ? AND password = ?",[req.body.doctorEmail,md5(req.body.doctorPassword)],(error,results)=>{
        if (error) throw error;
        if (results.length > 0){
            var doctorId = results[0].doctor_id;
            var hash = md5(Date.now());
            res.cookie("doctorId",doctorId,{maxAge: 86400000});
            res.cookie("doctorHash",hash,{maxAge: 86400000});
            pool.query("INSERT INTO sessions (doctor_id, hash) VALUES (?,?)",[doctorId, hash],(error,results)=>{
                if(error) throw error;
            });
            
            // Redirect
            res.redirect("/doctor");
        }
        else{
            // Redirect
            res.cookie("error","Login Failed");
            res.redirect("/doctor/login");
           
        }
    });
}

module.exports.authenticateDoctor = (req, res, next) => {
    pool.query("SELECT COUNT(*) as num FROM sessions WHERE doctor_id = ? AND hash = ?",[req.cookies.doctorId, req.cookies.doctorHash], (error, results) => {
      if (error) throw error;
        if (results[0].num > 0) {
          next();
        } else{
          res.redirect("/doctor/login");
        }
    });
  };

module.exports.checkLogin = (req, res, next)=>{
    if(req.cookies.doctorId==null){
        next();
    }
    else{
        res.redirect("/doctor");
    }
}


module.exports.postDoctorLogout = (req,res)=>{
    pool.query("DELETE FROM sessions WHERE doctor_id = ?",[req.cookies.doctorId],(error,results)=>{
        if(error) throw error;
      })
    res.clearCookie("doctorId");
    res.clearCookie("doctorHash");
    res.redirect("/doctor/login");
}