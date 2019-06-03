var MAX = 25;

var circles = [];
var circle;

function setup() {
	createCanvas(600, 400);

	for (var i = 0; i < MAX; i++){
		var circle = {
			x: random(width),
			y: random(height),
			r: 24
		}
		for (var j = 0; j < circles.length; j++){
      var d = dist(circle.x, circle.y, circles[i].y, circles[i].y)
      if (d < circle.r + circles[i].r){
        circle.x = random(width);
        circle.y = random(height);
      }else{
        circles.push(circle)
      }  
    }
  }
}

function draw() {
	background(255);
	for (var i = 0; i < circles.length; i++){
		fill(255, 0, 200, 50)
		noStroke();
		ellipse(circles[i].x,circles[i].y,circles[i].r*2,circles[i].r*2);
	}
}

