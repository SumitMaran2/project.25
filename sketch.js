
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var engine,world,paper,ground,dustbin;

function setup() {
	createCanvas(1400, 700);
    rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	   

	paper=new Paper(200,400,31);
	
	ground=new Ground(width/2,680,width,30);
    dustbin=new Dustbin(1200,500);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
}


function draw() {
  
  background("gray");
  
  Engine.update(engine);
paper.display();
ground.display();
dustbin.display();


  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



