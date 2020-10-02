var monkey,ground,banana,stone,invg,stoneGroup,bananaGroup,score=0,health=2,play=0,end=1,gameState=0,uphill;
var monkeyA,bananaI,StoneI,groundI,uphillI,b1;


function preload(){
  monkeyA = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png",
"Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaI = loadImage("banana.png");
  
  stoneI = loadImage("stone.png");
  
  groundI = loadImage("jungle.jpg");
  
  uphillI = loadImage("up.png");
  //hangI = loadImage("sprite_01.png");
}
function setup() {
  createCanvas(600, 280);
  
  invg = createSprite(200,265,400,5);
  
  ground=createSprite(200,40,400,400);
  ground.addImage("ground",groundI);
  ground.setVelocity(-5,0);
  ground.x=ground.width/2;
  
  monkey = createSprite(70,140,10,10);
  monkey.addAnimation("monkeyg",monkeyA);
   monkey.scale=0.09;
  monkey.setVelocity(0,10);
  
  stoneGroup = createGroup();
  bananaGroup = createGroup();
  upGroup = createGroup();

  
  b1 = createSprite(0,200,5,400);
  
}

function draw() {
  background(220);
  edges = createEdgeSprites();
  monkey.collide(b1);
  if(gameState===play){
     monkey.collide(upGroup);
     ground.setVelocity(-5,0);
     
    if(ground.x<100){
     ground.x=ground.width/2;
     }
    
       if(ground.x<100){
     ground.x=ground.width/2;
     }
    
    if(keyDown("space") && monkey.y>=220){
  monkey.setVelocity(0,-10);
     }
    if(keyDown("space") && monkey.y>=164.6){
  monkey.setVelocity(0,-10);
     }
    
    if(keyDown("space") && monkey.y<=158 && monkey.y>=153){
  monkey.setVelocity(0,-10);
     }
  monkey.velocityY=monkey.velocityY+0.5;
    
    if(monkey.isTouching(bananaGroup)){
     bananaGroup.destroyEach();
     score=score+2;
     }
    
    spawnObstacles();
   spawnBanana();
    
    monkeyLife();
  SpawnGround();

    if(health===0){
     gameState="end";
     }
     }
  
  
  else if(gameState==="end"){
     monkey.visible=false;
     gameOver.visible=true;
     restart.visible=true;
    stoneGroup.destroyEach();
    bananaGroup.destroyEach();
    ground.setVelocity(0,0);
    upGroup.destroyEach();
     }
  
    
  monkey.collide(invg);
  
  if(mousePressedOver(restart)){
   reset();
  
     }
  

  drawSprites();
  fill("white");
  textSize(18);
  text("Your score:-"+score,450,20);
}
  
function spawnObstacles(){
  
  if (frameCount%200===0) {
    stone = createSprite(610, 247,10,10);
    stone.x=610 ;
    stone.addAnimation( "Stone",stoneI);
    stone.velocityX=-5;
    stone.lifetime=122;
    stone.scale=0.18;
    //stone.debug=true;
    stone.setCollider("rectangle",0,0,350,350);
    stoneGroup.add(stone);
     
  }
}

function spawnBanana(){
  if (frameCount%120===0) {
    banana = createSprite(610, 347,10,10);
    banana.x=610;
    banana.y=random(100,150);
    banana.addAnimation( "Banana",bananaI);
    banana.velocityX=-5;
    banana.lifetime=122;
    banana.scale=0.08;
    bananaGroup.add(banana);
  }
}

function monkeyLife(){
  if(monkey.isTouching(stoneGroup)){
  health=health-1;
  stoneGroup.destroyEach();

  
  switch(score){
    case 10: monkey.scale=0.10;
       break;
    case 20: monkey.scale=0.12;
       break;
    case 30: monkey.scale=0.14;
       break;
    case 40:monkey.scale=0.16;
       break; 
    case 50:monkey.scale=0.18;
       break;
    case 60:monkey.scale=0.20;  
       break;
    case 70:monkey.scale=0.22;
       break;
    case 80:monkey.scale=0.24;
       break;
         }
  }
}
function SpawnGround() {
if (frameCount%140===0) {
    uphill = createSprite(610, 195,10,10);
    uphill.x=610;
    uphill.addAnimation("ground",uphillI);
    uphill.velocityX=-5;
  //uphill.debug=true;
    uphill.scale=2;
   upGroup.add(uphill);
  uphill.setCollider("rectangle",0,0,80,15);
     
    
  }
}
