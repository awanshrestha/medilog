const express = require("express");
const router = express.Router();
const doctor = require("../controller/doctor");

router.get("/",doctor.authenticateDoctor,doctor.dashboard);
router.get("/login",doctor.checkLogin,doctor.getDoctorLogin);
router.post("/login",doctor.postDoctorLogin);
router.get("/logout",doctor.postDoctorLogout);

module.exports = router;