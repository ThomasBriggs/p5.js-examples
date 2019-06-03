function Spot() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.d = 24;
  
  this.col = {
    r: random(50, 200),
    g: random(20, 241),
    b: random(100, 200),
    alpha: random(50, 150)
  };

  this.render = function() {
    noStroke();
    fill(this.col.r,this.col.g,this.col.b,this.col.alpha);
    ellipse(this.x, this.y, this.d, this.d)
  }
}
