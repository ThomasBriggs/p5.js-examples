var circleX = 12.5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(171, 228, 179);
  circleX += 1;
  noStroke();
  fill(255, 254, 150);
  ellipse(circleX, height/2 - 12.5, 25, 25);
}