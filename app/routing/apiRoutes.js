var express = require("express");
var friends = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        compare(req.body);

        friends.push(req.body);
        
        res.json(true);
    });
    

};

var compare = function(input) {
    var matchArray = [];

    for (i = 0; i < friends.length; i++) {
        var difference =0;
     
       for(l = 0; l < friends[i].scores.length; l++) {
           var diff = Math.abs(input.scores[l] - friends[i].scores[l]);
           difference += diff;
       }
       matchArray.push(difference);
       
    }
    var findMatch = function(matchArray) {
        return matchArray.indexOf(Math.min.apply(Math, matchArray))
    }
    var match = friends[findMatch(matchArray)]
    console.log(match)

}
