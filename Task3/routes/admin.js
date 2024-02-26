const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  console.log("In add Product Middleware!");
  res.send(
    '<form action="/admin/add-product" method="POST"><div>Product:<input type="text" name="title">Size:<input type="number" name="size"><button type="submit">Add Product</button></div></form>'
  );
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
