
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world;

var dustbinObj, groundObject, paper;


function setup(){

	createCanvas(1360, 620);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2, 600, width, 20);
	dustbinObj = new dustbin(1200, 570);
	paper = new Paper(300, 550);

	Engine.run(engine);

	console.log(paper);
}

function draw(){

   rectMode(CENTER);
   background(230);

   paper.display();
   groundObject.display();
   dustbinObj.display();
   
}

function keyPressed(){

	if(keyCode === UP_ARROW){

	  Matter.Body.applyForce(paper.body, paper.body.position, {	x : 70, y : -103 });  

	}
  
}