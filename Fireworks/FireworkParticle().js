function FireworkParticle() {
  this.d = 5;
	this.particles = [];
	this.x = random(rocket.x-25, rocket.x+25);
	this.y = random(rocket.y-25, rocket.y+25);
  
  this.render = function() {
    noStroke();
    fill(random(100, 255), random(200, 255), random(150, 255));
    ellipse(this.x, this.y, this.d, this.d);
  }
  
}