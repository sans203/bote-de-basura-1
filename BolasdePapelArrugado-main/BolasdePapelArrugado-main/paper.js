class paper{ 

  constructor(x,y){
 
   var options={
   isStatic:false,
   restitution:0.3,
   density:1.2
  }
  this.x=10;
  this.y=10;
  this.r=10;

  this.image=loadImage("paper.png")

  this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
  World.add(world, this.body);
 }
 display()
 {
  var paperPos=this.body.position;		

  push()
  translate(paperPos.x, paperPos.y);
  rectMode(CENTER)
  // strokeWeight(4);
  fill(12,12,12)
  rect(0,0,this.w, this.h, this.r);
  pop()
 }
}