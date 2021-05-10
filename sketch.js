const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject
var ground
var dustbin


function setup() {
	createCanvas(1600,800);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 paperObject=new Paper(100,550,50)

	//dustbin1 = new Dustbin (1200,650-15,10,100,{isStatic:true})
	//dustbin2 = new Dustbin (1300,697.5-50,220,10,{isStatic:true})
	//dustbin3 = new Dustbin (1400,650-15,10,100,{isStatic:true})
	dustbin = new Dustbin (1200,650)

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display()
  rect(ground.position.x,ground.position.y,width,10)
  //dustbin1.display()
  //dustbin2.display()
  //dustbin3.display()
  	dustbin.display()


  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:75,y:-75})
	}
}