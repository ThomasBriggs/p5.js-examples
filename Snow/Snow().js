function Snow(){
  this.x = random(0,width);
  this.y = random(0 -600);
  this.d = random(2,10);
  this.alpha = random(155, 255);
  this.yspeed;
  this.wind;

  this.render = function() {
    // image(img, this.x,this.y,this.radius,this.radius);
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, this.d, this.d);
  }

  this.move = function() {
    this.y += this.yspeed;
    if (this.wind > 0){
      this.x -= random(0.1, 0.5);
      this.wind -= 2;
    }else {
      this.x += random(0.1, 0.5);
      this.wind += 1;
    }
    if (this.wind == 0){
      this.wind = floor(random(-500,500));
    }
  }

  this.notOnScreen = function() {
    if (this.y > height || this.x < 0 - this.radius|| this.x > width + this.radius){
      return true;
    }else {
      return false;
    }
  }
}
