var express = require("express");
var app = express();
var http = require("http");
var fs = require("fs");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = 3000;


app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});