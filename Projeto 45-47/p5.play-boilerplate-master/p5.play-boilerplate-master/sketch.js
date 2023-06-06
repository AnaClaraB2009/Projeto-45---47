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

var database;

var boatGroup;

function preLoad () {

boatImg1 = loadImage ("./Images/navio 1.png")
boatImg2 = loadImage ("./Images/navio 2.png")
boatImg3 = loadImage ("./Images/navio 3.png")
boatImg4 = loadImage ("./Images/navio 4.png")
boatImg5 = loadImage ("./Images/navio 5.png")

titleImg = loadImage ("./Images/titulo.png")
seaImg = loadImage ("./Images/azul.png")
gridImg = loadImage ("./Images/grid.png")

explosionImg = loadImage ("./Images/explosão.png")
bombImg = loadImage ("./Images/bomba.png")

}

function setup() {
  createCanvas(800,400);

  boatGroup = new Group ()

  database = firebase.database () 

}

function draw() {
  background(255,255,255);  
  drawSprites();
}