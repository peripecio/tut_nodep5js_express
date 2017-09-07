// 
// Para conectar web con arduino via puerto serial
//
// https://es.linkedin.com/pulse/serialport-conecta-tu-arduino-con-nodejs-parte-1-datos-giupponi
//
// 29-08-2017
// G.Casado
//

// Servidor web y // Socket.io // con express

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3001;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// num usuarios
var numUsers = 0;



// controlar eventos de socket:
io.on('connection', function (socket) {

  socket.on('luz', function(data) {
//      console.log("luz: " + data.luzValue);
      socket.broadcast.emit('luz', data);
    }
  );
  socket.on('mouse', function(data) {
//      console.log("mouse: " + data.id + " - " + data.x + ", " + data.y);
      socket.broadcast.emit('mouse', data);
    }
  );
  
  socket.on('disconnect', function() {
//    console.log('Got disconnect! ' + socket.id);
    numUsers--;
    console.log('Quedan users: ' + numUsers);
//    io.emit('this', { will: 'be received by everyone'});
  });

  console.log("New connection xx: "+ socket.id);
 
});

console.log("ok server en 3001");

