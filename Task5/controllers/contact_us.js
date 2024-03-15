const path = require("path");
const rootDir = require("../util/path");

exports.getContactUs = (req, res, next) => {
  console.log("contact ");
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.onSuccess = (req, res, next) => {
  console.log(req.body);
  res.send("<h1>Form successfully filled</h1>");
};
