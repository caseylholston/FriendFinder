var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

const html = require('./app/routing/htmlRoutes.js');
const apis = require('./app/routing/apiRoutes.js');

app.use('/', html);
app.use('/home', html);
app.use('/survey', html);

app.use('/api/friends', apis);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});