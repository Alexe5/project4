var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var dots = 1000;

// var radius = 100;

var centerX = 500;
var centerY = 250;
var varRadius,x,y,teta,numPetal,lengthPetal,time,radius;

// ctx.fillStyle = 'yellow';
// ctx.fillRect(400,0,200,5);
// ctx.fillRect(995,150,5,200);
// ctx.fillRect(400,495,200,5);
// ctx.fillRect(0,150,5,200);

numPetal = prompt('Введи количество лепестков или просто нажми OK',15);
lengthPetal = prompt('Введи длину лепестков или просто нажми OK',55);

// ctx.beginPath();
// for (var i = 0; i <= dots; i++) {
//   teta = i*2*Math.PI/dots;
//   VarRadius = radius + 55*Math.sin(teta*15);
//   x = centerX + VarRadius*Math.cos(teta);
//   y = centerY + VarRadius*Math.sin(teta);
	
//   // ctx.fillRect(x,y,2,2);

//   if(i===0) {ctx.moveTo(x,y);}
//   else{
//     ctx.lineTo(x,y);
//   }
// }
// ctx.closePath();
// ctx.stroke();
// ctx.fill();

var drawCircle = function(radius,color,offset) {
  ctx.fillStyle = color;
  ctx.beginPath();
  for (var i = 0; i <= dots; i++) {
    teta = i*2*Math.PI/dots;
    varRadius = radius + lengthPetal*Math.sin(teta*numPetal + offset);
    x = centerX + varRadius*Math.cos(teta);
    y = centerY + varRadius*Math.sin(teta);
	
    // ctx.fillRect(x,y,2,2);

    if(i===0) {ctx.moveTo(x,y);}
    else{
      ctx.lineTo(x,y);
    }
  }
  ctx.closePath();
  ctx.stroke();
  // ctx.fill();
};

time = 0;
var draw = function() {
  time++;
  ctx.clearRect(0,0,1000,500);
  for (var i = 0; i < 3; i++) {
  	drawCircle(
  		100-i*25,
  		'green',
  		(i+1)*time/10
  	);
  }
};

var render = function() {
  draw();
  window.requestAnimationFrame(render);
};
render();

// drawCircle(100,'green',10);
// drawCircle(75,'red',20);
// drawCircle(50,'blue',30);















module.exports = canvas;
