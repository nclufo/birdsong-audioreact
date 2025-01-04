let mic;
let vol;
var birdsong;
var volReact;

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

  volReact = map(vol, 0, 1, 0, 255); //when surround vol increases, birdsong vol increases
  //volReact = map(vol, 0, 1, 255, 0) //when surround vol increases, birdsong vol decreases
  birdsong.setVolume(volReact);
}

function mousePressed(){
  mic.start();
  getAudioContext().resume();

  birdsong.play();
}