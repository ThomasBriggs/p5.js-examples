var canvasHeight = 200;
var circle1 = {
  d: 50,
  x: 25,
  y: canvasHeight/2
};

var velocity;
var speed = 1;
var acceleration = 0.015;

function setup() {
  createCanvas(1200, canvasHeight);
}

function draw() {
  background(221, 198, 232);
  fill(171, 231, 220);
  ellipse(circle1.x, circle1.y, circle1.d, circle1.d);
  circle1.x += speed + (velocity = Math.min((acceleration*circle1.x), 5));
  console.log(velocity)
}