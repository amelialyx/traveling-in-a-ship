
function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,200,400,400);
  sea.addImage(seaImg);
  sea.scale=0.24;
  sea.velocityX=-2;

  ship=createSprite(125,200,30,30);
  ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  ship.scale=0.25;
}

function draw() {
  background("blue");

if (sea.x<0){
  sea.x=200;
}


  drawSprites();
}