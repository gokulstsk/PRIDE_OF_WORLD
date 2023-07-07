
var express = require('express');
var socket = require('socket.io');


var app = express();

app.use("/", express.static(__dirname));
app.get("/", function(req, res)
{
	res.sendFile("page2.html");
});



var server = app.listen(3000, function () {
    console.log("server just started listening on port 3000 ....");

});//localhost:3000


var io = socket(server);
io.set('transports', ['websocket']);

var tanks = {};
io.on("connection", function (socket) {
    console.log("A client tried to connect with ID :: " + socket.id);
    socket.emit("GetYourID", { id : socket.id });

});

