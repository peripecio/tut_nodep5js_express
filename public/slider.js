
var socket = io();
// Esto no funciona para hacer emit ¿?:
// socket = io.connect('http://localhost:3001)'); //, { 'forceNew': true });

var slider = document.getElementById("mySlider");
var output = document.getElementById("valSlider");


output.innerHTML = slider.value; // Display the default slider value

socket.on('luz', function(data){
	this.value = data.luzValue;
	output.innerHTML = this.value;		
	slider.value = this.value;
});

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	output.innerHTML = this.value;


	// enviar via socket
	socket.emit('luz', {luzValue: this.value});
//	console.log("Se supone que he enviado socket luz: " + this.value);
}
