const express = require("express");
const path = require("path");

const contactController = require("../controllers/contact_us");

const router = express.Router();

router.get("/contactus", contactController.getContactUs);

router.post("/success", contactController.onSuccess);

module.exports = router;
