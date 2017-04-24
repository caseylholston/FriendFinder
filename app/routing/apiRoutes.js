var express = require('express');
var path = require('path')
var apis = express();

html.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

html.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

html.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});


module.exports = apis;