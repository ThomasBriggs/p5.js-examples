function Food() {
  this.x = floor(random(0, width/scl))*scl;
  this.y = floor(random(0, height/scl))*scl;
  this.eaten;

  this.render = function() {
    fill(208, 30, 73);
    stroke(0);
    rect(this.x, this.y, scl, scl);
  }

  this.eat = function() {
    if (snake.y == this.y && snake.x == this.x) {
      this.x = floor(random(0, width/scl))*scl;
      this.y = floor(random(0, height/scl))*scl;
      this.eaten = true;
    }else {
      this.eaten = false;
    }
  }
}
