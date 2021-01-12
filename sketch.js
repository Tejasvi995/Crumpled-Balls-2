var engine, world;
var paper;
var left, bottom, right;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImg = loadImage("images/dustbingreen.png");

}

function setup() {
	createCanvas(1500, 700);

	bin = createSprite(1080,520)
	bin.addImage(binImg)
	bin.scale = 0.75
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,648,50);
	ground = new Ground(width/2, 650, width, 15);
	left = new Dustbin(1000,540,20,200);
	bottom = new Dustbin(1080,630,180,20);
	right = new Dustbin(1160,540,20,200);
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
  
  paper.display();
  left.display();
  bottom.display();
  right.display();
  ground.display();
 
  keyPressed();
  drawSprites();
 
  function keyPressed() {
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y:-75 })
		}
 	}
}


