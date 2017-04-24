var express = require('express');
var path = require('path');
var apis = express();
var dataFile = require('../data/friends.js');

//var friendList = require('../data/friends.js');

apis.get('/api/friends', function(req, res) {
  res.json(dataFile);
});
//     console.log('I am in the API Routes file');
//   response.json(path.join(__dirname, friendList.friends));


// apis.post("/api/friends", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/home.html"));
// });


module.exports = apis;