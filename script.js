var canvas = document.getElementById('myCanv');

var ctx = canvas.getContext("2d");

var x_ball, y_ball, radius;

x_ball = 240; y_ball = 160; radius = 20;
dx = 5;


function draw() {
	//canvas.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	//ctx.rect(20, 40, 50, 50);
	ctx.arc(x_ball, y_ball, radius, 0, Math.PI * 2);
	ctx.fillStyle = "#F25A29";
	ctx.fill();
	ctx.closePath();
	x_ball += dx;
}

setInterval(draw, 10);