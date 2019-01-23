module.exports.dashboard = (req,res)=>{
  result = {  searchResults: [] , notFound : ""}
  res.render("./pharmacy/index.ejs",result);
}

module.exports.search = (req,res)=>{
  var notFound;
  res.cookie("patientPharmacy",req.body.searchId);
  pool.query("SELECT * FROM medications WHERE patient_id = ?",[req.body.searchId],(error,searchResults)=>{
    if (error) throw error;
    if(searchResults.length==0){
      notFound = "No medicine prescribed for given patient id.";
      res.clearCookie("patientPharmacy");
      }
      result = {searchResults:searchResults,notFound:notFound}
      res.render("pharmacy/index.ejs",result);
  })
}

module.exports.done = (req,res)=>{
  result = {  searchResults: [] , notFound : ""}
  pool.query("UPDATE medications SET medicine_purchased = 1 WHERE patient_id = ?",[req.cookies.patientPharmacy],(error,results)=>{
    if (error) throw error;
    res.render("pharmacy/index.ejs",result);
  })
}
