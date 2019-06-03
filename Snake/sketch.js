var snake;
var food;
var scl = 20;
var score = 0;
var tail = [];
var fR = 30;
var gameRun = true;
var crashed = false;

function setup() {
  createCanvas(1080, 680);
  snake = new Snake(width/2, height/2);
  food = new Food();
}

function draw() {
  frameRate(fR)

  if (gameRun){

    background (0);

    fill(255);
    textSize(200)
    textAlign(CENTER, CENTER)
    text((score), width/2, height/2);


    tail.push(new Snake(snake.x, snake.y))
    if (tail.length > (score+1)) {
      tail.splice(0, 1);
    }

    for (var i = 0; i < tail.length; i++) {
      tail[i].render();
    }

    snake.render();
    snake.move();
    snake.outOfBounds();

    food.render();
    food.eat();
    if (food.eaten == true) {
      score++;
    }

    snake.checkCrash();
    if (crashed) {
      gameOver();
    }

 }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir("UP")
  }else if (keyCode === DOWN_ARROW) {
    snake.dir("DOWN");
  }else if (keyCode === LEFT_ARROW) {
    snake.dir("LEFT");
  }else if (keyCode === RIGHT_ARROW) {
    snake.dir("RIGHT");
  }

  if (key == 'P'){
    gameRun = !gameRun;
    background(0, 200);
    fill(235, 255, 0);
    noStroke();
    text(("PAUSED"), width/2, height/2);
  }
}

function gameOver() {
  gameRun = false;
  var message = "Game Over!\nYou scored: " + score +
  "\nWould you like to restart?";
  var result = window.confirm(message);
  if (result){
    location.reload();
  }else {
    noLoop();
  }
}
