var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  
}

// function to display UI
function draw() {
  background(46,139,87);
 
  

  drawSprites();
 
}

//Function to read values from DB
function readStock(data){
 
}

//Function to write values in DB
function writeStock(x){
 
}