
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;
	
	ground1 = new plane(600,490,1200,20);
	hammer1 = new hammer(600,250,50,150);
	stone1 = new stone(700,350,60,60);
	iron1 = new Iron(800,360,60,100);
	Sand1 = new Sand(900, 400);
	Sand2 = new Sand(900, 400);
	Sand3 = new Sand(900, 400);
	Sand4 = new Sand(900, 400);
	Sand5 = new Sand(900, 400);
	Sand6 = new Sand(700, 400);
	Sand7 = new Sand(600, 400);
	Sand8 = new Sand(650, 400);
	Sand9 = new Sand(550, 400);
	Sand10 = new Sand(500, 400);
	rubber1 = new Rubber(450, 400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");  

  ground1.display();
  hammer1.display();
  stone1.display();
  iron1.display();
  Sand1.display();
  Sand2.display();
  Sand3.display();
  Sand4.display();
  Sand5.display();
  Sand6.display();
  Sand7.display();
  Sand8.display();
  Sand9.display();
  Sand10.display();
  rubber1.display();
  drawSprites();
 
}



