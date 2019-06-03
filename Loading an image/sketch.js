var img;

function preload()
{
  // load image
  img = loadImage("apple.png");
}

function setup()
{
  // set canvas size
  createCanvas(20, 20);
  var p = createP("How fast does this update");
}

function draw()
{
  background(255);

  // display image (img, x, y)
  image(img, 0, 0);
}
