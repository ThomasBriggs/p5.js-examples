var bubbles = [];
var maxAmmount = 2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    // bubbles[i].wobble();
    bubbles[i].make();
  }
}

function keyPressed() {
  console.log(bubbles);
  bubbles.push(new Bubble(mouseX, mouseY))
  if (bubbles.length > maxAmmount) {
    bubbles.splice(0, 1);
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.make = function() {
    stroke(random(0, 255), random(0, 255), random(0, 255), );
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }

  this.wobble = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  };
}
