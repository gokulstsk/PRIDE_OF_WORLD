var express = require('express');
var socket = require('socket.io');
var app = express();
app.use("/", express.static(__dirname,));
app.get('/', function(req, res) {
    res.sendFile(__dirname +"/page1.html");
});
var server=app.listen(3000);
// var io=socket(server);
const io = require("socket.io-client");
io.connect('transport', ['websocket']);
// socket=io.connect("http://localhost:3000",{transports:[WebSocket]});
io().on("connection",function(socket) {
    console.log("connection trying"+socket.id);
});
// io.
