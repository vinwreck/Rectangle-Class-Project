var box1, fixedRect, movingRect;




function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50); 
  movingRect = createSprite(600,200,50,50);
  box1 = createSprite(400, 100,50,50);

  movingRect.shapeColor="blue";
  fixedRect.shapeColor="green";
  box1.shapeColor="white";

  movingRect.debug=true;
  fixedRect.debug=true;
  box1.debug=true;

  //movingRect.velocityX=-5;
  

  fixedRect.velocityX=5;
  movingRect.velocityX=-5;
  
  
}

function draw() {
  background(0,0,0); 
  
  // movingRect.x=mouseX;
  // movingRect.y=mouseY;

  if(touching(movingRect, box1)) {
    movingRect.shapeColor="red";
    box1.shapeColor="yellow";

  }

  else {
    movingRect.shapeColor="blue";
    box1.shapeColor="white";
  }


  
  //bouncing(box1, fixedRect);
  colliding(movingRect, fixedRect)
  drawSprites();
}

