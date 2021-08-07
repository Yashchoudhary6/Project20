var bg, sleep, brush, gym, eat, drink, move, bath, astronuant;

function preload(){
  createSprite(500,200,20,20);
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  sleep = loadAnimation("sleep.png");
  eat = loadAnimation("eat1.png","eat2.png");
  move = loadAnimation("move.png","move1.png");
  brush = loadAnimation("brush.png");
  bg = loadImage("background.png");
  drink = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");

}

function setup() {
  createCanvas(600,600);
  
  astronuant = createSprite(300, 200);
  astronuant.addAnimation("sleep",sleep);
  astronuant.scale = 0.1;
}

function draw() {
  background(0,0,0); 
  if(keyDown("UP_ARROW")){
    astronuant.addAnimation("brush",brush);
    astronuant.changeAnimation("brush");
    astronuant.y = 350;
    astronuant.velocityY = 0;
    astronuant.velocityX = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronuant.addAnimation("bath",bath);
    astronuant.changeAnimation("bath");
    astronuant.y = 350;
    astronuant.velocityY = 0;
    astronuant.velocityX = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronuant.addAnimation("eat",eat);
    astronuant.changeAnimation("eat");
    astronuant.y = 350;
    astronuant.velocityY = 0;
    astronuant.velocityX = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronuant.addAnimation("gym",gym);
    astronuant.changeAnimation("gym");
    astronuant.y = 350;
    astronuant.velocityY = 0;
    astronuant.velocityX = 0;
  }
  if(keyDown("m")){
    astronuant.addAnimation("move",move);
    astronuant.changeAnimation("move");
    astronuant.y = 350;
    astronuant.velocityY = 2.1;
    astronuant.velocityX = 1.2;
  }
  drawSprites();
}