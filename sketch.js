var movingRect, fixedRect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(200,100,50,50);
  movingRect.shapeColor = "Yellow"

  fixedRect = createSprite(200,100,50,50);
  fixedRect.shapeColor = "Blue"

  rect1 = createSprite(200,200,50,50);
  rect1.shapeColor = "pink"
  rect1.velocityX = 2;

  rect2 = createSprite(600,200,50,50);
  rect2.shapeColor = "brown"
}

function draw() {
  background(220,255,255);  
  
  movingRect.x = mouseX
  movingRect.y = mouseY;

  console.log("Distance " + (movingRect.x - fixedRect.x));
  console.log("Width/2 "+  (movingRect.width + fixedRect.width)/2)

  if((movingRect.x - fixedRect.x) <= (movingRect.width + fixedRect.width)/2
  && (fixedRect.x - movingRect.x) <= (movingRect.width + fixedRect.width)/2 
  && (movingRect.y - fixedRect.y) <= (movingRect.height + fixedRect.height)/2
  && (fixedRect.y - movingRect.y) <= (movingRect.height + fixedRect.height)/2 )
  {
    fixedRect.shapeColor = "Red"
  }
  else
  {
    fixedRect.shapeColor = "Blue"
  }
  
  if (( rect1.x - rect2.x ) <= (rect1.width + rect2.width)/2
  && ( rect2.x - rect1.x) <= (rect2.width + rect1.width)/2 )
  {
     rect1.velocityX = - 1*rect1.velocityX ;
  }

  drawSprites();
}