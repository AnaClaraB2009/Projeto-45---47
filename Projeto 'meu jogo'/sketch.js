var boatImg1;
var boatImg2;
var boatImg3;
var boatImg4;
var boatImg5;
var titleImg;
var seaImg; 
var explosionImg;
var gridImg;
var bombImg; 
var ondasImg

var database;

var boatGroup;

var boat1

function preLoad () {

boatImg1 = loadImage ("./Images/navio1.png")
boatImg2 = loadImage ("./Images/navio2.png")
boatImg3 = loadImage ("./Images/navio3.png")
boatImg4 = loadImage ("./Images/navio4.png")
boatImg5 = loadImage ("./Images/navio5.png")
titleImg = loadImage ("./Images/titulo.png")
seaImg = loadImage ("./Images/azul.png")
gridImg = loadImage ("./Images/grid.png")
ondasImg = loadImage ("./Images/ondas.png")

explosionImg = loadImage ("./Images/explosão.png")
bombImg = loadImage ("./Images/bomba.png")

}

function setup() {
  createCanvas(800,400);

  boatGroup = new Group ()

  database = firebase.database () 

  boat1 = createSprite (200,200,20,20);
  boat1.setAnimation = ('boatImg1', oi);

}

function draw() {
  background(255,255,255); 

  drawSprites();
}