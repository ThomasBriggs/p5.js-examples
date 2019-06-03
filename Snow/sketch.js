var snow = [];
var img;
var img2;
var backgroundImg;

function preload() {
  img = loadImage("images/snowflake.png")
  img2 = loadImage("images/snowflake2.png")
  backgroundImg = loadImage("images/background.jpg")
}

function setup() {
  createCanvas(900,649);
  for (var i = 0; i < 1000; i++){
    snow[i] = new Snow();
    snow[i].yspeed = random(1, 2);
    snow[i].wind = floor(random(-500,500));

  }
}

function draw() {
  image(backgroundImg, 0, 0, 900, 649);
  for (var i = 0; i < snow.length; i++) {
    snow[i].render();
    snow[i].move();

    if (snow[i].notOnScreen()){
      snow[i].y = random(0, -600)
      snow[i].x = random(0,width)
    }
  }

}
