
 
// this is file 

// Express server
var express = require('express');
const { ServerResponse } = require('http');
const { monitorEventLoopDelay } = require('perf_hooks');
// var socket = require('socket.io');
var app = express();
app.use("/", express.static(__dirname ));
app.get("/", function(req, res){
    res.sendFile("page1.html");
});
var server = app.listen(2000);
console.log("Server is running on http://localhost:2000/page1.html");
