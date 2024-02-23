const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In add Product Middleware!");
  res.send(
    '<form action="/product" method="POST"><div>Product:<input type="text" name="title">Size:<input type="number" name="size"><button type="submit">Add Product</button></div></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
