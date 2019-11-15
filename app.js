var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendfile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;