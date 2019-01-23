const express = require("express");
const router = express.Router();
const pharmacy = require("../controller/pharmacy");

router.get("/",pharmacy.dashboard);
router.post("/search",pharmacy.search);
router.post("/done",pharmacy.done);

module.exports = router;
