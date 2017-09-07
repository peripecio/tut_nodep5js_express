// 
// Para conectar web con arduino via puerto serial
//
// https://es.linkedin.com/pulse/serialport-conecta-tu-arduino-con-nodejs-parte-1-datos-giupponi
//
// 29-08-2017
// G.Casado
//

// Servidor web y 
// Socket.io 
// con express

var express = require('express');
var app = express();

//var server = app.listen(3000);
//app.use(express.static('public'));
var server = app.listen(3000);
app.use(express.static('public'));


var socket = require('socket.io');
var io = socket(server);


// controlar eventos de socket:
io.on('connection', function (socket) {

  // socket.on('mouse', mouseMsg);
  // function mouseMsg(data) {
  //   console.log("Recibido mouse: " + data);

  // }

  io.emit('this', { will: 'be received by everyone'});


  socket.on('mouseData', 
    function(data) {
      console.log("Recibido mouse: " + data);
    }
  );

  socket.on('luz', 
    function(data) {
      console.log("luz: " + data);
    }
  );

  // socket.on('error', 
  //   function(error) {
  //     console.log("Error: " + error);
  // });

  socket.on('disconnect', function() {
    console.log('Got disconnect! ' + socket.id);
    io.emit('this', { will: 'be received by everyone'});
  });

  console.log("New connection xx: "+ socket.id);
 
});

console.log("ok server en 3000");


/*

// ==========================

// Conexión al puerto Serie (Arduino conectado allí)

var SerialPort = require('serialport');
//var puerto = New SerialPort(puerto, opciones);
var puerto = new SerialPort('/dev/cu.usbmodem411', {
   baudRate: 9600
//   parser: SerialPort.parsers.readline('\n')
});

puerto.on('open', function(){
  console.log('Arduino conectado');
});

puerto.on('error', function(error){
  console.log(error);
});

puerto.on('data', function(data){
  console.log(data);
});

// enviar datos cada cierto rato
setInterval(function(){
		var nLeds = Math.floor(Math.random()*101);
		puerto.write("1,"+nLeds+"\n");
		console.log(nLeds);
    },1000);

*/


/*

// Para arduino

void setup(){
   //La velocidad de transferencia de nuestro arduino es 
   //﻿de 9600 baudios. Este número
   //debe coincidir con el puesto en baudRate.﻿
   Serial.begin(9600);
}

void loop(){
  //Enviamos un mensaje cada dos segundos.
  Serial.println('1,50');
  delay(2000);﻿

}

*/

