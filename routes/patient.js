const express = require("express");
const router = express.Router();
const patient = require("../controller/patient");

router.get("/",patient.authenticatePatient,patient.dashboard);
router.get("/login",patient.checkLogin,patient.getPatientLogin);
router.post("/login",patient.postPatientLogin);
router.get("/logout",patient.postPatientLogout);

module.exports = router;