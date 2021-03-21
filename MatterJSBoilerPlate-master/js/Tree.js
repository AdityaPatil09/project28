class Tree{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.image=loadImage("images/tree.png")
		this.body=Bodies.rectangle(this.x, this.y, 650, 10,{isStatic:true})
		World.add(world, this.body);
	}

	display()
	{
		var TreePos=this.body.position;	
		push()
		translate(TreePos.x, TreePos.y+10);
	
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,-225,650,750);
		pop()
 }
}
