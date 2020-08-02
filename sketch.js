//name spacing for Matter.js' modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bottomSide, rightSide, leftSide; //sides of the dustbin
var paper;

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//creates objects for the Ground class
	ground = new Ground(width/2, height, width, 20);

	//creates object for the dustbinSide class
	bottomSide = new dustbinSide(1100, 680, 200, 20);
	rightSide = new dustbinSide(990, 640, 20, 100);
	leftSide = new dustbinSide(1210, 640, 20, 100);

	//creates object for the Paper class
	paper = new Paper(200, 600, 20);

	Engine.run(engine);//updates the engine continuously
}


function draw() {
	background(0);//clears the background
	rectMode(CENTER);
	
	//display all the objects created using the physics engine
	ground.display();

	bottomSide.display();
	rightSide.display();
	leftSide.display(); 

	paper.display();

	if(keyWentDown(UP_ARROW)){
		//makes the paper jump when the up arrow is pressed
		Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85})
	}

	drawSprites();//draws the sprites
}

