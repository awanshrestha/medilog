const express = require("express");
const router = express.Router();
const lab = require("../controller/lab");

router.get("/",lab.dashboard);
router.post("/search",lab.searchPatient);
router.get("/update_labtests/:patient_id",lab.updateLabTests);
router.post("/update_labtests/:patient_id",lab.postUpdateLabTests);

module.exports = router;
