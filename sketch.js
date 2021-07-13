
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5, roof;
var r1, r2, r3, r4, r5;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(300, 400, 50);
	bob2 = new Bob(350, 400, 50);
	bob3 = new Bob(400, 400, 50);
	bob4 = new Bob(450, 400, 50);
	bob5 = new Bob(500, 400, 50);

	roof = new Roof(450, 200, 300, 10);
	r1 = new SlingShot(bob1.body, {x: 300,y: 200})
	r2 = new SlingShot(bob2.body, {x: 350,y: 200})
	r3 = new SlingShot(bob3.body, {x: 400,y: 200})
	r4 = new SlingShot(bob4.body, {x: 450,y: 200})
	r5 = new SlingShot(bob5.body, {x: 500,y: 200})


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	drawSprites();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	roof.display();
	r1.display();
	r2.display();
	r3.display();
	r4.display();
	r5.display();









}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-60}); } 
} 



