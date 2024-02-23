const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In add Product Middleware!");
  res.send("<h1>Hello from Add Product!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In one Middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(4000);
