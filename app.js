const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mysql = require("mysql");
const fileUpload = require("express-fileupload");

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
app.use(fileUpload());

const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");
const patientRoutes = require("./routes/patient");
const doctorRoutes = require("./routes/doctor");
const pharmacyRoutes = require("./routes/pharmacy");
app.use("/",indexRoutes);
app.use("/admin",adminRoutes);
app.use("/patient",patientRoutes);
app.use("/doctor",doctorRoutes);
app.use("/pharmacy",pharmacyRoutes);

app.listen(3000,()=>{
    console.log("Server started");
})
