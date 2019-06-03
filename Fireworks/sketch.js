//var rockets = [];

function setup() {
  createCanvas(600, 400);
//  for(var i = 0; i < 1; i++) {
//    rockets[i] = new Rocket();
//  }
  rocket = new Rocket();
  
}

function draw() {
  background(0);
	
  rocket.move();
	rocket.render();
	if (rocket.alpha <= 0){
		paraticle = new FireworkParticle();
		paraticle.render();
	}else{
		rocket.render();
	}
}