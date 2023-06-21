
var canvas;

var backGroundImg;
var backGroundImg2;

var boats = [];

var boat1;
var boat2;
var boat3;
var boat4;
var boat5;

var boatImg1;
var boatImg2;
var boatImg3;
var boatImg4;
var boatImg5;

var gridImg;
var reset;
var resetImg;

var explosionImg;
var bombImg;

var database;
var form, player;

var playerCount;
var allPlayers;

var gameState;

function preload() {

  backGroundImg = loadImage("./assets/planodefundo.png");
  backGroundImg2 = loadImage('./assets/azul.png')

  //boatImg1 = loadImage("./Images/navio1.png")
  //boatImg2 = loadImage("./Images/navio2.png")
  //boatImg3 = loadImage("./Images/navio3.png")
  //boatImg4 = loadImage("./Images/navio4.png")
  //boatImg5 = loadImage("./Images/navio5.png")
  //seaImg = loadImage("./Images/azul.png")
  //gridImg = loadImage("./Images/grid.png")
  

  //explosionImg = loadImage("./Images/explosão.png")
  //bombImg = loadImage("./Images/bomba.png")

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

  if (playerCount === 2) {
    game.update (1);
  }

if (gameState === 1) {
  game.play ();
}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
