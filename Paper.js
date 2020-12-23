class Paper
{
	constructor(x,y,r){ 
	
		
		var options={
			isStatic:false,
			restitution:0.6,
			friction:0.6,
			density:1.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image = loadImage("sprites/paper.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		
		World.add(world, this.body);
		
	}
	display()
	{
		
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			
			fill("white")
			ellipse(0,0,this.r, this.r);
			imageMode(CENTER);
		image(this.image, 0, 0, 50, 50);
		
			pop()
			
	}
	
}