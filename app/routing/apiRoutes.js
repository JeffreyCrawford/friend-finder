var path = require("path");
var express = require('express');

module.exports = function() {

    var router = express.Router();

    router.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    router.post('/api/friends', function (req, res) {
        return res.json(true);
    });


}