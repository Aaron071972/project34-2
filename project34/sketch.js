//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImg;
var empty, full, emptyImg, fullImg;
var database

function preload(){
  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")  

  emptyImg=loadImage("images/empty.jpg")
   fullImg=loadImage("images/filled.jpg")
 }

function setup() {
  createCanvas(500, 500);
  database = firebase.database()

  dog=createSprite(250, 440, 10, 10)
  dog.addImage("dog", dogImg)
  dog.scale=0.15

  full=createSprite(150, 400, 10, 10)
  full.addImage("cup", fullImg)
  full.scale=0.07

 foodStock = database.ref('Food');
  foodStock.on("value", readStock)
  
  
}


function draw() {  
background(46, 139, 87)
 
if(keyWentDown(UP_ARROW)){
     writeStock(foodS)
    dog.addImage("dog", happyDog)
    full.addImage("cup", emptyImg)
  }

  drawSprites();
  //add styles here
  textSize(15)
  fill("Black")
text("Press Up Arrow Key to feed Drago Milk", 130, 200)

}
function readStock(data){
  foodS=data.val();
}
function writeStock(foodS){
  database.ref('/').update({
    Food: foodS
  })
}



