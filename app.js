const express = require("express");
// const http = require("http");
const app = express();
app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});
app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});
app.use((req, res, next) => {
  console.log("Middleware 3");
  next();
});
app.use((req, res, next) => {
  console.log("Middleware 4");
});
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
