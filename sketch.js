
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0
function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
 monkey = createSprite(100,265,20,20)

  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  ground = createSprite(300,300,1150,10)
  ground.velocityX = -3
  
 
}


function draw() {
background("blue")
  if(keyDown("space")) {
        monkey.velocityY = -4 ;
  }    


    if (ground.x < 0 ){
      ground.x = ground.width/2;
    }
    
     
      monkey.velocityY = monkey.velocityY + 0.8


    monkey.collide(ground);
   stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+score,500,50)
  
  stroke("black");
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50)
 spawnObstacles();
  spawnbanana();
    drawSprites();

}
function spawnbanana(){
 if (frameCount % 80 === 0){
   banana = createSprite(400,280,10,40);
   banana.velocityX = -6
   banana.addImage("bananaImage",bananaImage)
   banana.scale = 0.15
    banana.lifetime = 60;

 }
 

}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,270,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage("obstacleImage",obstacleImage)
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 60;

 }
}
