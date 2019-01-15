const express = require("express");
const router = express.Router();
const admin = require("../controller/admin");

router.get("/",admin.authenticateAdmin,admin.adminpage);
router.get("/login",admin.checkLogin,admin.getAdminLogin);
router.post("/login",admin.postAdminLogin);
router.get("/logout",admin.postAdminLogout);

router.post("/addAdmin",admin.postAddAdmin);
router.post("/resetPassword",admin.postResetPassword);

router.get("/addPatient",admin.authenticateAdmin,admin.getAddPatient);
router.get("/addDoctor",admin.authenticateAdmin,admin.getAddDoctor);

router.post("/addPatient",admin.postAddPatient);
router.post("/addDoctor",admin.postAddDoctor);

router.get("/patientAdded",admin.patientAdded);
router.get("/doctorAdded",admin.doctorAdded);

module.exports = router;