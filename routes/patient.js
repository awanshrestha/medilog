const express = require("express");
const router = express.Router();
const patient = require("../controller/patient");

router.get("/",patient.authenticatePatient,patient.dashboard);
router.get("/login",patient.checkLogin,patient.getPatientLogin);
router.post("/login",patient.postPatientLogin);
router.get("/logout",patient.postPatientLogout);
router.get("/forgot_password",patient.forgotPassword);
router.post("/forgot_password",patient.postForgotPassword);
router.get("/verify_code/:useremail/:vcode",patient.verifyCode);
router.post("/verify_code/:useremail/:vcode",patient.postVerifyCode);

router.get("/history",patient.authenticatePatient,patient.patienthistory);
router.get("/labtests",patient.authenticatePatient,patient.labtests);
router.get("/medication",patient.authenticatePatient,patient.medication);
router.get("/settings",patient.authenticatePatient,patient.settings);


router.post("/updateProfile",patient.postUpdateProfile);
router.post("/resetPassword",patient.postResetPassword);

module.exports = router;
