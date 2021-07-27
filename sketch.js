var btn_red, btn_green;
function setup() {
  createCanvas(400,400);
  background(220)
  btn_red = createSprite(100,50,80,30);
  btn_red.shapeColor="red"
  
  btn_green = createSprite(250,50,80,30);
  btn_green.shapeColor="green"
}

function draw() 
{
  if (mousePressedOver(btn_red))
{
  background(255,100,0)
}
if (mousePressedOver(btn_green))
{
 background(0,255,0)
}
 // background(30);
 
drawSprites();
}




