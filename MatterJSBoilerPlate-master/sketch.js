
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;
var tree,stone,ground,slingshot;
var world,boy;

function preload(){
	boy = loadImage("images/boy.png");

}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 stone = new Stone(190,530,30);
 slingshot = new SlingShot(stone.body,{x:180,y:530});
	
	
	m1=new Mango(1110,230,30);
  m2=new Mango(1170,140,30);
  m3=new Mango(1010,110,30); 
 
 
 
  tree=new Tree(1050,580);
	Engine.run(engine);
  
	ground=new Ground(width/2,690,width,20);

}


function draw() {
  rectMode(CENTER);
  background("pink");

image(boy,150,450,200,300);
textSize(25);
text("Press Space to get a second Chance to Play!!",50 ,50);

  tree.display();
  m1.display();
  m2.display();
  m3.display();
  stone.display();
  slingshot.display();
  ground.display();

  detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
 


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
	slingshot.fly();	
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	slingshot.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
		
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
		if(distance<=lmango.r+lstone.r)
		{ 
		Matter.Body.setStatic(lmango.body,false);
		}

  }

