function Bubble(x, y){
  this.y = y;
  this.x = x;
  this.r = 50;
  this.col = color(255)

  this.render = function(){
    noStroke();
    fill(this.col);
    ellipse(this.x,this.y,this.r*2,this.r*2)
  };

  this.wobble = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  };

  this.colourChange = function(mode) {
    if (mode == "red"){
      this.col = color(255, 0, 0);
    }else if (mode == "white"){
      this.col = color(255);
    }else if (mode == "random"){
      this.col = color(random(0, 255), random(0, 255), random(0, 255));
    }
  }

  this.touches = function(thing) {
    var d = dist(this.x,this.y,thing.x,thing.y)
    if (d <= this.r + thing.r){
      return true;
    }else {
      return false;
    }
  }

}
