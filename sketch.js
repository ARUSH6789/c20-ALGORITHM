var fixedRect, movingRect;

function setup(){
  fixedRect = createSprite(350,200,50,300);
  movingRect = createSprite(200,200,100,30);

  car1 = createSprite(100,100,20,20);
  car1.velocityX = 3;

  ball = createSprite(100,200,20,20);
  ball.shapeColor = "blue"
  ball.velocityX = 3;

  //movingRect.debug = true;
  //fixedRect.debug = true;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}



function draw() {
  
  background("black");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //detecting touch
  if(fixedRect.x-movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
  movingRect.x-fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.y-movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
  movingRect.y-fixedRect.y <= fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  //car colliding with the wall
  if(fixedRect.x-car1.x <= fixedRect.width/2 + car1.width/2){
    car1.velocityX = 0;
    car1.shapeColor = "red";
  }

  if(fixedRect.x-ball.x <= fixedRect.width/2 + ball.width/2){
    ball.velocityX = -3;
   }  
  drawSprites()
}