var express = require('express');
var path = require('path');
var apis = express();
var dataFile = require('../data/friends.js');

//var friendList = require('../data/friends.js');

apis.get('/api/friends', function(req, res) {
  res.json(dataFile);
});



apis.post("/add", function(req, res) {
 
    //console.log(req);
    var closestMatch = 0;
    var newFriend = req.body;
    var newName = newFriend.name;
    var newPhoto = newFriend.photo;
    var newScores = newFriend.scores;
    var scoresArray = [];


   for (var i = 0; i < dataFile.friends.length; i++){
     //console.log(dataFile.friends[i].name);
     totalDifference = 0;

        for (var j = 0; j < newScores.length; j++){
         //console.log("In the J function" + dataFile.friends.name);
          totalDifference += Math.abs(
            parseInt(newScores[j]) -
            parseInt(dataFile.friends[i].scores[j]));
            //console.log('Total Difference:' + totalDifference);
          }
        scoresArray.push(totalDifference);
        //console.log(scoresArray);
    }

      for(var i=0; i<scoresArray.length; i++){
        //console.log('I am running closest match function');
      if(scoresArray[i] <= scoresArray[closestMatch]){
        //console.log('the closest match is ' + closestMatch);
        closestMatch = i;
      }
    }  
   
   res.json(dataFile.friends[closestMatch]);
   dataFile.friends.push(newFriend);
   //console.log(closestMatch);
});

//function closestMatch(){

//};


module.exports = apis;