const express = require("express");
const router = express.Router();
const hospital = require("../controller/index");

router.get("/",hospital.hospitalSite);
router.get("/firstaid",hospital.firstaid);
router.get("/faqs",hospital.faqs);
router.get("/regional",hospital.regional);

module.exports = router;
