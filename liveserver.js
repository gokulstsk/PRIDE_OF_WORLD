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
var akms={};
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
    
    io.emit("GetyourID",{id:socket.id});
    socket.on("thank you ",function(){
        console.log("the server with id "+socket.id);
    socket.on("IWasCreated",function(data){
        if(data.id!=socket.id){
            // cheat player code
        }
        akms[data.id]=data;
        console.log(data);
        socket.broadcast.emit("AnotherTankCreated",data);
        for(key in akms){
            if (key == socket.id) continue;
            socket.emit("anotherTankcreated",akms[key]);
        }
    });
    socket.on("IMoved", function (data) {
        akms[data.id] = data;
        socket.broadcast.emit("AnotherTankMoved", data);
        
    });

    socket.on("IGoAway", function (data) {
        delete akms[socket.id];
        socket.broadcast.emit("AnotherWentAway", { id : socket.id });
    });

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