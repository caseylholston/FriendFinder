var express = require('express');
var path = require('path');
var apis = express();
var dataFile = require('../data/friends.js');

//var friendList = require('../data/friends.js');

apis.get('/api/friends', function(req, res) {
  res.json(dataFile);
});

apis.post("/add", function(req, res) {
    console.log(req);
    var newFriend = req.body;
    dataFile.friends.push(newFriend);
    //closestMatch();
});

//function closestMatch(){

//};


module.exports = apis;