const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome To chat App</h1>");
});

app.listen(4000);
