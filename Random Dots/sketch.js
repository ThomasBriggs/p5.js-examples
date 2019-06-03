var spots = [];
var maxAmmount = 2000;

function setup() {
  frameRate(5);
  createCanvas(windowWidth , windowHeight);
}

function draw() {
  background(0);
  for (var i = 0; i < spots.length; i++) {
    spots[i].render();
  }

  fill(255, 75);
  textAlign(RIGHT);
  text("Created by\nThomas Briggs",width-2, height-22);

  spots.push(new Spot());
  if (spots.length > maxAmmount){
    spots.splice(0, 1);
  }
}
