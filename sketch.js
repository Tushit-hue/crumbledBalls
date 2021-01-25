
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	groundObject=new ground(width/2,670,width,20);
	ball = new Ball()
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  groundObject.display();
  ball.display()
  dustbinObj.display();
  keyPressed()



  function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:17,y:-43})
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:0})	
	}
}


 
}

