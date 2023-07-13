// import { Server } from "socket.io";
var express = require('express');
var socket = require('socket.io');
var app = express();
app.use("/", express.static(__dirname,));
app.get('/', function(req, res) {
    res.sendFile(__dirname+"/page2.html");
});
var server=app.listen(8000,function(){
    console.log("Server just started listening on port 8000....");
});
// var io=require('socket.io');
var io=socket(server);
io.use('transports', ['websocket','polling']);
console.log("server listening duplicate");

var io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:8000",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
        
    },
    allowEIO3: true 

});



io.on("connection",function(socket) {
    console.log("connection trying :: "+socket.id);
    socket.emit("GetyourID",{id:socket.id});
    socket.on("thank you ",function(){
        console.log("the server with id "+socket.id);
    });
    // io.on("thankyou",function(){
    //     console.log("the server with id"+socket.id);
    // });
});

// console.log('$socket.id :: '+socket.id);


    // let http = require('http').Server(app);
    // let port = process.env.PORT || 3000;

    // console.log(`Server is up on port ${port}: http://localhost:${port}/`);
// });