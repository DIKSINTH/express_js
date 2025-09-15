const express = require("express");
const app = express();
app.use("/second", (req, res, next) => {
  res.send("<h1>Second Page</h1>");
  console.log("Second Middleware");
});
app.use("/", (req, res, next) => {
  res.send("<h1>First Page</h1>");
  console.log("First Middleware");
});
app.listen(3000);
