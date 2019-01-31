const md5 = require("md5");

module.exports.dashboard = (req,res)=>{
  result = {  searchResults: [] , notFound : ""}
  res.render("./lab/index.ejs", result);
}

module.exports.searchPatient = (req,res)=>{
  var notFound;
  pool.query("SELECT * FROM patient WHERE patient_id=?",[req.body.searchId],(error,searchResults)=>{
    if (error) throw error;
    if(searchResults.length==0){
    notFound = "Patient Id Not Found"
    }
    result = {searchResults:searchResults,notFound:notFound}
    res.render("lab/index.ejs",result);
  });
}

module.exports.updateLabTests = (req,res)=>{
  var param = req.params.patient_id;
  var success = "";
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
    if(error) throw error;
  data = {param:param,success:success, patient: patient[0] || []}
  res.render("./lab/add_labtests.ejs",data);
  })
}


module.exports.postUpdateLabTests = (req,res)=>{
  var param = req.params.patient_id;
  var success;
  let sampleFile = req.files.sampleFile;
  pool.query("SELECT * FROM patient WHERE patient_id = ?",[param],(error,patient)=>{
    if(error) throw error;
    var filename = patient[0].name+" "+ req.body.fileName +md5(Date.now()).slice(0,6)+'.jpg';
    pool.query("INSERT INTO labtests (patient_id,file_name,destination) VALUE (?,?,?)",[param,req.body.fileName,filename],(error,results)=>{
      if(error) throw error;
      {
        success = "Lab Report Updated";
      data ={success:success, param:param, patient : patient[0]|| []}
      res.render("./lab/add_labtests.ejs",data);
      }
    })
    sampleFile.mv('./public/uploads/'+filename, function(err) {
      if (err)
        return res.status(500).send(err);
  }
)}
);
}
