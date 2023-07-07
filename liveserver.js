var express = require('express');
var socket = require('socket.io');
var app = express();
app.use("/", express.static(__dirname,));
app.get('/', function(req, res) {
    res.sendFile(__dirname +"/page1.html");
});
var server=app.listen(3000);
var io=socket(server);
var io = require("socket.io-client");

io.connect('transport', ['websocket']);
console.log("server listening duplicate");
socket=io.connect("http://localhost:3000",{transports:['websocket']});
socket.on("connect",function(socket) {
    // console.log("socket");
    // console.log("connection trying"+socket.id);
    // socket.emit("GetyourID",{id:socket.id});
    // Socket.on("thankyou",function(){
        // console.log("the server with id"+socket.id);
    });
// });
// io.
