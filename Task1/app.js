// const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In 1st Middleware!");
  next(); // Allows request to continue next inline middleware
});

app.use((req, res, next) => {
  console.log("In 2nd Middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);
// server.listen(4000);

app.listen(4000);
