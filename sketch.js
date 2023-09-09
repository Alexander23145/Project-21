
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var groundObj
var leftSide
var rightSide

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(200,50,30,ball_options);
	World.add(world,ball);
	Engine.run(engine);
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1400,600,20,120)
	keyPressed()
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundObj.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,30);

  
}
function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:100,y:200})
}




}


