
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ground;
function preload()
{

}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ball1=new Ball(200,250,75);
ground=new Rect(400,650,10000,20)


p2=new dustbin(1120,639)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 ball1.display();
 ground.display();
 
 
 p2.display();
 
 okay()
}
function okay(){
if (keyDown(UP_ARROW)) {
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:800,y:-870})
	
}
	if (keyDown(LEFT_ARROW)) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-1,y:-9})
	
	}
}


