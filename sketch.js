var gameState = 1;

var scene;

var bottle1,bottle2,bottle3;
var pt1,pt2,pt3,pt4;

var gun,bullet;

var score;

var count = 0;

function preload(){
  backgroundImage=loadImage("Images/background.png")
  gunimage=loadImage("Images/gun.png")
  bottle = loadImage("Images/bottle.png")
  barrel = loadImage("Images/barrel.png")
  bottlebreak = loadImage("Images/bottlebreak.png")
  glassbreak= loadSound("Images/glassbreak.mp3")
}
function setup() {
  createCanvas(1200,1000);
  
  scene  = createSprite(600,500,1200,1000);
  scene.addImage(backgroundImage);
  scene.scale = 1.5;
  gun=createSprite(1000,630,10,10);
  gun.addImage(gunimage);
  gun.scale = 0.7;
   

  pt1=createSprite(200,600,10,10);
  pt1.addImage(barrel);
  pt2=createSprite(370,500,10,10);
  pt2.addImage(barrel);
  pt3=createSprite(530,550,10,10);
  pt3.addImage(barrel);

  bottle1=createSprite(195,470,80,80);
  bottle1.addImage(bottle);
  bottle1.scale = 0.3
  bottle2=createSprite(360,370,80,80);
  bottle2.addImage(bottle);
  bottle2.scale = 0.3
  bottle3=createSprite(520,430,80,80);
  bottle3.addImage(bottle);
  bottle3.scale = 0.3

  score=0
 // pt4=new platform(900,830,1800,30)
 
}

function draw() {
  background(255);  

  drawSprites();
  
 
  if (gameState === 1){
    camera.position.x = mouseX;
   camera.position.y = mouseY;
    if(mousePressedOver(bottle1)){
      bottle1.addImage(bottlebreak)
      glassbreak.play()
      bottle1.lifetime=2
      score=(score+1)/3
      count = (count+1)/3
    }
    if(mousePressedOver(bottle2)){
      bottle2.addImage(bottlebreak)
      glassbreak.play()
      bottle2.lifetime=2
      score=score+1
      count=count+1
    }           
    if(mousePressedOver(bottle3)){
      bottle3.addImage(bottlebreak)
      glassbreak.play()
      bottle3.lifetime=2
      score=score+1
      count=count+1
    }
    if (count>=3&& score <4 ){
      gameState=2 
    }
    else if (count>=3 && score <3) {
      lost()
    }
  }
    text ("Score: "+score,700,500)
}
   function lost(){
     text("YOU LOSE",600,500)
   }
