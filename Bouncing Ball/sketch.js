var cWidth = window.innerWidth;
var cHeight = window.innerHeight;

var running = true;
var leftPaddle;
var rightPaddle;

var ball = {
  x:cWidth/2,
  y:cHeight/2,
  d: 30,
  xspeed:20,
  yspeed:5
};

function setup() {
  ellipseMode(CORNER);
	colorMode(HSB);
  createCanvas(cWidth, cHeight);
  leftPaddle = new Paddle(50, false);
  rightPaddle = new Paddle(width-50, true);
  
}

function draw() {
  background(0)
  display();
  leftPaddle.render();
  rightPaddle.render();
  if (running === true) {
    bounce();
    moving();
    leftPaddle.move();
    rightPaddle.move()
  }

}

function display() {
  strokeWeight(2);
  stroke(255);
  noFill();
  ellipse(ball.x,ball.y,ball.d,ball.d);
}

function moving() {
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}

function bounce() {
  if (ball.x < 0|| ball.x + ball.d > width) {
    ball.xspeed = ball.xspeed*-1;
  }

  if (ball.y < 0 || ball.y + ball.d > height) {
    ball.yspeed = ball.yspeed*-1;
  }
  
  if (leftPaddle.collide(ball)) {
    ball.xspeed = ball.xspeed*-1;
  }
  
  if (rightPaddle.collide(ball)) {
    ball.xspeed = ball.xspeed*-1;
  }
}

function run() {
  running = !running;
}

function Paddle(x, ai) {
    
    this.height = 120;
    this.width = 10;
    this.x = x;
    this.y = (height/2-(this.height/2));
    this.ai = ai;
    
    this.render = function() {
        
      stroke(255);
      fill(0);
      rect(this.x, this.y, this.width, this.height)
        
    }
    
    this.move = function() {
      
      if (this.ai) {
        
        this.y = ball.y - this.height/2;
        
      }else{
        
        this.y = mouseY - this.height/2;
        
      }
    }
    
    
    this.collide = function(object) {
      
      if (this.x < object.x + object.d &&
        this.x + this.width > object.x &&
        this.y < object.y + object.d &&
        this.height + this.y > object.y) {
        
          return true
        
      }else {
        
          return false;
        
      }
      
    }
}