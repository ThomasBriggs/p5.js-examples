var ship;

function setup(){
	angleMode(DEGREES);
	createCanvas(1200, 700);
	ship = new SpaceShip();
}

function draw() {
  background(0)
	ship.render();
	ship.move();
}

