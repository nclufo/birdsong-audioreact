let mic;
let vol;
let birdsong;
let volReact;
let amp;
let ampVol;

function preload(){
  birdsong = loadSound("birdsong audio-react.mp3", loaded);
}

function setup() {
  createCanvas(400, 400);
  getAudioContext().suspend();
  mic = new p5.AudioIn();

  amp = new p5.Amplitude();
}

function draw() {
  background(255);

  vol = mic.getLevel();
  fill(10, birdsong.currentTime()*5, 120);
  noStroke();
  ellipse(200, 200, vol*400 + 100);
  //console.log(vol);

  // ampVol = amp.getLevel();
  // //var mapAmpVol = map(ampVol, 0, 1, 10, 200);
  // fill(10);
  // noStroke();
  // ellipse(200,200, ampVol*200, ampVol*200);
  

  volReact = map(vol, 0, 1, 0, 255); //when surround vol increases, birdsong vol increases
  //volReact = map(vol, 0, 1, 255, 0) //when surround vol increases, birdsong vol decreases
  birdsong.setVolume(volReact);

  fill(10);
  text(birdsong.currentTime(),50,50);
}

function loaded(){
  console.log("loaded");
}

function mousePressed(){
  mic.start();
  getAudioContext().resume();

  if (!birdsong.isPlaying()) {
     birdsong.play();
  } else {
    birdsong.pause();
  }
}