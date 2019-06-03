var x;
function setup() {
  createCanvas(600, 400)
  background(0)
}

function draw() {
  fill(0, 200, 200)
  ball(width/2, height/2, 25)
  x = Math.round(random(1, 10))
  console.log(x)
}

function ball(x, y, d){
  ellipse(x, y, d, d);
}