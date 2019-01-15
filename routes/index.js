const express = require("express");
const router = express.Router();
const hospital = require("../controller/index");

router.get("/",hospital.hospitalSite);

module.exports = router;