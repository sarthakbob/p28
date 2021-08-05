
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImg,boyImg,ground,tree,boy;
var m1,m2,m3,m4,m5;
var s1;
var string1

function preload()
{
	treeImg	= loadImage("tree.png")
	boyImg	= loadImage("boy.png")
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650,680,1300,40);
	s1 = new Stone(100,460,25);
	string1 = new String(s1.body,{x:100,y:460})
	
	m1=new Mango(600,290,45);
	m2=new Mango(850,320,45);
	m3=new Mango(730,200,45);
	m4=new Mango(940,220,45);
	m5=new Mango(825,170,45);
	
	tree = createSprite(775,350);
	tree.addImage(treeImg);
	tree.scale = 0.5;
	boy = createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale = 0.2;
	
  
}


function draw() {
  rectMode(CENTER);
  background("light blue");
  Engine.run(engine);

  detectColision(s1,m1);
  detectColision(s1,m2);
  detectColision(s1,m3);
  detectColision(s1,m4);
  detectColision(s1,m5);
  drawSprites();
 
  ground.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  s1.display();
  string1.display();
}

function mouseDragged(){
	Matter.Body.setPosition(s1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	string1.fly();

}

function detectColision(stone,mango){
	mangoBodyPos = mango.body.position;
	stoneBodyPos = stone.body.position;
	var distance = dist(stoneBodyPos.x,stoneBodyPos.y,mangoBodyPos.x,mangoBodyPos.y)
	if (distance <= mango.r+stone.r){
		Body.setStatic(mango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		string1.attach(s1.body)
	}

}
