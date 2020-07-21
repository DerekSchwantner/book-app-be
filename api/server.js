const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//Instance of server
const server = express();
// Library Middleware
server.use(cors(), helmet(), express.json());

server.get("/", (req, res) => {
  res.send("Welcome to Readrz!");
});

module.exports = server;
