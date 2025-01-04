var birdsong;

function preload(){
  birdsong = loadSound("birdsong audio-react.mp3");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function mousePressed(){
  birdsong.play();
}