var canvas;

var backGroundImg;
var backGroundImg2;

var database;
var form, player;

function preload() {
  backGroundImg = loadImage("./assets/planodefundo.png");
  backGroundImg2 = loadImage('./assets/azul.png')

  boatImg1 = loadImage("./Images/navio1.png")
  boatImg2 = loadImage("./Images/navio2.png")
  boatImg3 = loadImage("./Images/navio3.png")
  boatImg4 = loadImage("./Images/navio4.png")
  boatImg5 = loadImage("./Images/navio5.png")
  seaImg = loadImage("./Images/azul.png")
  gridImg = loadImage("./Images/grid.png")
  ondasImg = loadImage("./Images/ondas.png")

  explosionImg = loadImage("./Images/explosão.png")
  bombImg = loadImage("./Images/bomba.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();

}

function draw() {
  background(backGroundImg);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
