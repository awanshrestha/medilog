const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");

pool = mysql.createPool({
    pool: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "medilog"    
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
  }));
app.use(cookieParser());

app.set("view-engine", "ejs");
app.use(express.static(__dirname + "/public"));

const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");
const patientRoutes = require("./routes/patient");
const doctorRoutes = require("./routes/doctor");
app.use("/",indexRoutes);
app.use("/admin",adminRoutes);
app.use("/patient",patientRoutes);
app.use("/doctor",doctorRoutes);

app.listen(3000,()=>{
    console.log("Server started");
})