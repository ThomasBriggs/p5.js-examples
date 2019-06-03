function Snake(x, y) {
  this.x = x;
  this.y = y;
  this.xspeed = 0;
  this.yspeed = 0;

  this.render = function() {
    fill(235, 255, 0);
    stroke(0)
    rect(this.x,this.y,scl,scl);
  }

  this.move = function() {
    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;
  }

  this.dir = function(direction) {
    if (this.currentDir != "DOWN" && direction == "UP") {
      this.xspeed = 0;
      this.yspeed = -1;
      this.currentDir = "UP";
    }else if (this.currentDir != "UP" && direction == "DOWN") {
      this.xspeed = 0;
      this.yspeed = 1;
      this.currentDir = "DOWN";
    }else if (this.currentDir != "RIGHT" && direction == "LEFT") {
      this.xspeed = -1;
      this.yspeed = 0;
      this.currentDir = "LEFT";
    }else if (this.currentDir != "LEFT" && direction == "RIGHT") {
      this.xspeed = 1;
      this.yspeed = 0;
      this.currentDir = "RIGHT";
    }
  }

  this.outOfBounds = function() {
    if (this.x == width){
      this.x = 0;
    }else if (this.x == 0 - scl) {
      this.x = width-scl;
    }else if (this.y == height) {
      this.y = 0;
    }else if (this.y == 0 - scl) {
      this.y = height-scl
    }
  }

  this.crash = function(other) {
    if (this.x == other.x && this.y == other.y){
      return true;
    }else {
      return false;
    }
  }

  this.checkCrash = function() {
    for (var i = 0; i < tail.length ; i++) {
      for (var j = 0; j < tail.length; j++) {
        if (i != j && j != i && tail[i].crash(tail[j])){
          crashed = true;
        }
      }
    }
  }

}
