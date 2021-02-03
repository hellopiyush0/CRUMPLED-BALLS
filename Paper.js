class Paper {

	constructor(x, y){

		var options = {

            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2			
			
		}

		this.body = Bodies.circle(x, y, 20, options);
        World.add(world, this.body);

		this.x = x;
		this.y = y;

		this.width = 77;
		this.height = 77;

        this.image = loadImage("paper.png");

	}
	display(){
				
		var Pos = this.body.position;		
		
		push()
		translate(Pos.x, Pos.y);
		imageMode(CENTER)
		
		image(this.image, 0, 0, this.width, this.height);
		pop()
		
	}

}