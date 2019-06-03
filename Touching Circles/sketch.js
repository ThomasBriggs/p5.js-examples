var bubbles = [];
var maxAmmount = 5;

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < maxAmmount ; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length ; i++) {
    bubbles[i].render();
    bubbles[i].wobble();
    bubbles[i].colourChange("white")
    for (var j = 0; j < bubbles.length; j++) {
      if (i != j && j != i && bubbles[i].touches(bubbles[j])){
        bubbles[i].colourChange("red");
        bubbles[j].colourChange("red");
      }
    }
  }
}
