function setup() {
  frameRate(60)
  createCanvas(windowWidth, windowHeight);
  background(171, 228, 179);
}

function draw() {
  noStroke();
  // if ((key == " ") && (keyIsPressed === true)){
  //   fill(255, 254, 150);
  //   ellipse(mouseX, mouseY, 25, 25);
  // }
  if (keyIsDown(32)) {
    fill(255, 254, 150);
    ellipse(mouseX, mouseY, 25, 25);
  }
}

function keyPressed(){
  if ((keyCode == BACKSPACE) || (key == "C")){
    background(171, 228, 179);
  }
  if (key == "S"){
    save("MyImage.png")
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  background(171, 228, 179);
}
