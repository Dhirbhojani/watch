


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  hr = hour();mn = minute();sc = second();
  translate(200,200)
  rotate(-90)
  push();

  
  
  scAngle = map(sc,0,60,0,360)
  stroke(225,0,0);
  strokeWeight(7);
  rotate(scAngle) 
  line(0,0,100,0);
  pop()
  push()
  mnAngle = map(mn,0,60,0,360)
  stroke(0,255,0)
  rotate(mnAngle)
  line(0,0,100,0);
  pop()
  push()
  hrAngle = map(hr %12,0,12,0,360)
  stroke(0,0,255)
  rotate(hrAngle)
  line(0,0,100,0)
  pop()
  noFill()
  stroke("red")
    arc(0,0,300,300,0,scAngle)
stroke("green")
    arc(0,0,310,310,0,mnAngle)
    stroke("blue")
    arc(0,0,320,320,0,hrAngle)
 
  
}
