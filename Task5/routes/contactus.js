const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/contactus", (req, res, next) => {
  console.log("contact ");
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

router.post("/success", (req, res, next) => {
  console.log(req.body);
  res.send("<h1>Form successfully filled</h1>");
});

module.exports = router;
