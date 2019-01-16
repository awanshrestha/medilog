function changePage() {
  window.location="views/index.ejs";
}

function gotoDashboard() {
  window.location = "views/patient/patient_dashboard.ejs";
}

let todayDate = new Date();

let useString = todayDate.toDateString();

//document.write(useString);

