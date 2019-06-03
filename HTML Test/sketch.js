var sliderValue;
var backgroundColor = 0;

function setup() {
  createCanvas(600, 400);

  for (var i = 0; i < 5; i++){
    p = createP("Melons: ");
    p.style("background-color", "#CCC");
    p.style("padding", "24px");

    var a = createA('#', 'Add melon');
    a.mouseClicked(addPic);

    a.parent(p);

    var button = select('#button1');
    button.mousePressed(clearImages);

    var slider = select('#slider');
    slider.input(setSliderValue)
  }
}

function setSliderValue() {
  var p = select('#sliderValue')
  p.html(this.value())
  sliderValue = this.value();
}

function clearImages() {
  var images = selectAll('img');
  for (var i = 0; i < images.length; i++) {
    images[i].remove();
  }
}

function addPic() {
  var img = createImg("melon.png");
  img.size(100, 100);

  img.parent(this.parent());
}

function draw() {
  background(backgroundColor)
  backgroundColor = map(sliderValue,0,100,0,255)
}
