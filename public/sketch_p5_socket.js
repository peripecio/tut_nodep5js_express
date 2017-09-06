
var socket;

function setup() {
	console.log("Ya estoy dentro de sketch_p5.js");

	createCanvas(200,200);
	background(51);
	fill(255, 10);
	stroke(0, 10);

//	socket = io.connect('localhost:3000)');
	socket = io.connect('http://127.0.0.1:3000)', { 'forceNew': true });

  	socket.on('this', function (data) {
    	console.log("this: " + data);
  	});
}

function draw() {


}

function mouseDragged() {
	if(mouseX>=0 && mouseX<width && mouseY>=0 && mouseY<height) {
		var dataMouse = {
			x: mouseX,
			y: mouseY
		};

		console.log("Sending mouseData: " + dataMouse.x + ", "+dataMouse.y);

		socket.emit('mouseData', dataMouse);

		ellipse(mouseX, mouseY, 60,60);
	}
}

