var express = require('express');
var app = express();
var fs = require("fs");

var port = 8099;

// -------------------------------------------------------------------------------

app.get('/', function (req, res) {
    fs.readFile( __dirname + "/" + "404.txt", 'utf8', function (err, data) {
       console.log("Got GET for "+req.url+" from " + req.ip);
       res.end(data);
    });
 });

// -------------------------------------------------------------------------------

 app.get('/api/cape.png', function (req, res) {

    console.log("Got GET for "+req.url+" from " + req.ip + ` (Query: ${req.query.user})`);

    if(req.query.user == undefined) {
        res.end("No user specified.");
    }

    res.sendFile(__dirname + "/capes/" + req.query.user + ".png");
 });

// -------------------------------------------------------------------------------

 app.get('/api/servers', function (req, res) {

    console.log("Got GET for "+req.url+" from " + req.ip);

    res.sendFile(__dirname + "/json/" + "serverlist.json");
 });
 
// -------------------------------------------------------------------------------

 var server = app.listen(port, function () {
    console.log("Started.\nUse Port [%s]", server.address().port)
 });