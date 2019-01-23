const md5 = require("md5");

module.exports.dashboard = (req,res)=>{
    result = {  searchResults: [] , notFound : ""}
    res.render("./doctor/index.ejs", result);
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
            res.cookie("doctorName",results[0].name);
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
    res.clearCookie("doctorName");
    res.clearCookie("doctorHash");
    res.redirect("/doctor/login");
}

module.exports.searchPatient = (req,res)=>{
  var notFound;
  pool.query("SELECT * FROM patient WHERE patient_id=?",[req.body.searchId],(error,searchResults)=>{
    if (error) throw error;
    if(searchResults.length==0){
    notFound = "Patient Id Not Found"
    }
    result = {searchResults:searchResults,notFound:notFound}
    res.render("doctor/index.ejs",result);
  });
}

module.exports.viewPatient = (req,res)=>{
  var param = req.params.patient_id;
   pool.query("SELECT * FROM patient WHERE patient_id = ?",[req.params.patient_id],(error,patient)=>{
    if(error) throw error;
    pool.query("SELECT * FROM description WHERE patient_id=?",[req.params.patient_id],(error,description)=>{
      if(error){ throw error; }
      pool.query("SELECT * FROM diagnosis WHERE patient_id=?",[req.params.patient_id],(error,diagnosis)=>{
        if(error){ throw error; }
        pool.query("SELECT * FROM medications WHERE patient_id=?",[req.params.patient_id],(error,medications)=>{
          if(error){ throw error; }
          pool.query("SELECT * FROM labtests WHERE patient_id=?",[req.params.patient_id],(error,labtests)=>{
            if(error){ throw error; }
            pool.query("SELECT * FROM appointment WHERE patient_id=?",[req.params.patient_id],(error,appointment)=>{
              if(error){ throw error; }
              data = {param:param,patient : patient[0]|| [], description : description|| [],diagnosis : diagnosis|| [],medications : medications|| [],labtests : labtests|| [],appointment : appointment || []}
              res.render("./doctor/view_patient.ejs",data);
            })
          })
        })
      })
    })
  })
}

module.exports.updateHealthStatus = (req,res)=>{
  var param = req.params.patient_id;
  var success = "";
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
    if(error) throw error;
  data = {param:param,success:success, patient: patient[0] || []}
  res.render("./doctor/update_health.ejs",data);
  })
}
module.exports.addDiagnosis = (req,res)=>{
  var param = req.params.patient_id;
  var success = "";
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
    if(error) throw error;
  data = {param:param,success:success, patient: patient[0] || []}
  res.render("./doctor/diagnosis.ejs",data);
  })
}
module.exports.updateLabTests = (req,res)=>{
  var param = req.params.patient_id;
  var success = "";
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
    if(error) throw error;
  data = {param:param,success:success, patient: patient[0] || []}
  res.render("./doctor/add_labtests.ejs",data);
  })
}
module.exports.updateMedication = (req,res)=>{
  var param = req.params.patient_id;
  var success = "";
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
    if(error) throw error;
  data = {param:param,success:success, patient: patient[0] || []}
  res.render("./doctor/prescribe_medicine.ejs",data);
  })
}
module.exports.addAppointment = (req,res)=>{
  var param = req.params.patient_id;
  var success = "";
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
    if(error) throw error;
  data = {param:param,success:success, patient: patient[0] || []}
  res.render("./doctor/add_appointment.ejs",data);
  })
}
module.exports.postUpdateHealthStatus = (req,res)=>{
  var param = req.params.patient_id;
  var success;
  pool.query("INSERT INTO description (patient_id,blood_group,heart_rate,blood_pressure,blood_sugar,cholesterol_level,allergies) VALUE (?,?,?,?,?,?,?)",[param,req.body.bloodGroup,req.body.heartRate,req.body.bloodPressure,req.body.bloodSugar,req.body.cholesterolLevel,req.body.allergies],(error,results)=>{
    if(error) throw error;
    pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
      success = "Updated";
    data ={success:success, param:param, patient : patient[0]|| []}
    res.render("./doctor/update_health.ejs",data);
    })
  })
}
module.exports.postAddDiagnosis = (req,res)=>{
  var param = req.params.patient_id;
  var success;
  pool.query("INSERT INTO diagnosis (patient_id,disease_problem,description,doctor_name) VALUE (?,?,?,?)",[param,req.body.disease,req.body.description,req.cookies.doctorName],(error,results)=>{
    if(error) throw error;
    pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
      success = "Updated";
    data ={success:success, param:param, patient : patient[0]|| []}
    res.render("./doctor/diagnosis.ejs",data);
    })
  })
}
module.exports.postUpdateLabTests = (req,res)=>{
  var param = req.params.patient_id;
  var success;
  let sampleFile = req.files.sampleFile;
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
    if(error) throw error;
    var filename = patient[0].name+ req.body.fileName +md5(Date.now()).slice(0,6)+'.jpg';
    pool.query("INSERT INTO labtests (patient_id,file_name,destination) VALUE (?,?,?)",[param,req.body.fileName,filename],(error,results)=>{
      if(error) throw error;
      {
        success = "Lab Report Updated";
      data ={success:success, param:param, patient : patient[0]|| []}
      res.render("./doctor/add_labtests.ejs",data);
      }
    })
    sampleFile.mv('./public/uploads/'+filename, function(err) {
      if (err)
        return res.status(500).send(err);
  }
)}
);
}
module.exports.postUpdateMedication = (req,res)=>{
  var param = req.params.patient_id;
  var success;
  var din = req.body.days;
  var aaja = Date.now();
  var x = false;
  var enddate = 86400000* din + Date.now() ;
  pool.query("INSERT INTO medications (patient_id,medicine_name,amount,dose,prescribed_by,prescribed_date,prescribed_for,end_date,medicine_purchased) VALUE (?,?,?,?,?,?,?,?,?)",[param,req.body.medicineName,req.body.amount,req.body.dose,req.cookies.doctorName,aaja,din,enddate,x],(error,results)=>{
    if(error) throw error;
    pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
      success = "Medications Updated";
    data ={success:success, param:param, patient : patient[0]|| []}
    res.render("./doctor/prescribe_medicine.ejs",data);
    })
  })
}
module.exports.postAddAppointment = (req,res)=>{
  var param = req.params.patient_id;
  var success;
  pool.query("INSERT INTO appointment (patient_id,department,doctor_name,appointment_date,appointment_time) VALUE (?,?,?,?,?)",[param,req.body.department,req.body.doctor,req.body.appointmentDate,
    req.body.appointmentTime],(error,results)=>{
    if(error) throw error;
    pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
      success = "Appointment Scheduled";
    data ={success:success, param:param, patient : patient[0]|| []}
    res.render("./doctor/add_appointment.ejs",data);
    })
  })
}
