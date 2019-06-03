function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(5)
}

function draw() {
  background(255)
  stroke(255)
  strokeWeight(4)
  for (var x = 0; x <= width; x+=50){
    for(var y = 0; y <=height; y+=50){
      fill(0, random(50,200), random(50, 200))
      ellipse(x, y, 25, 25)
    }
  }
}
