function Rocket() {
  this.exploded = false;
  this.alpha = 255;
  this.d = 10;
  this.explodeRadius = 25;
  
  this.x = random(width/2 - 200, width/2 + 200);
  this.y = height;
  this.grav = 0.15;
  
  this.yspeed = random(6, 11);
  
  this.render = function() {
    fill(255, this.alpha);
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
  }
  
  this.move = function() {
    if (this.yspeed > 0) {
      this.yspeed -= this.grav;
      this.y -= this.yspeed; 
    }else if (this.yspeed > 0){
			this.yspeed += this.grav;
      this.y -= this.yspeed; 
		}
		this.alpha -=3;
  }
	
}