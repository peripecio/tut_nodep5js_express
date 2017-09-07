

// socket viene de antes
// var socket = io();
var radio = 50;

function setup() {

	createCanvas(200,200);
	background(51);
	fill(255, 10);
	stroke(0, 10);

  	socket.on('mouse', function (data) {
//    	console.log("mouse: " + data.x + ", "+ data.y);
    	push();
    	fill(0,200,200, 10);
    	ellipse(data.x, data.y, radio,radio);
    	pop();
  	});
}

function draw() {


}

function send_draw() {

		var dataMouse = {
			id: socket.id,
			x : mouseX,
			y : mouseY
		};
		socket.emit('mouse', dataMouse);

    	ellipse(dataMouse.x, dataMouse.y, radio,radio);
}

function mousePressed() {
	send_draw();
}
function mouseDragged() {
	send_draw();
}
