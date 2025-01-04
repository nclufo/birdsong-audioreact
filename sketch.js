let mic;
let vol;
var birdsong;

function preload(){
  birdsong = loadSound("birdsong audio-react.mp3");
}

function setup() {
  createCanvas(400, 400);
  getAudioContext().suspend();
  mic = new p5.AudioIn();
}

function draw() {
  background(255);

  vol = mic.getLevel();
  fill(vol*200);
  noStroke();
  ellipse(200, 200, vol*400 + 100);
  console.log(vol);
}

function mousePressed(){
  mic.start();
  getAudioContext().resume();

  birdsong.play();
}