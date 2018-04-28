var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(htmlRoutes());


app.listen(PORT, function() {
    console.log("Server listening on port " + PORT);
});

