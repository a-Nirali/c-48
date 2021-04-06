class Ball{

    constructor(x,y,r){
    var options={
    
    isStatic:true

    }

    this.r=r;
    this.body=Bodies.circle(x,y,this.r,options);
    World.add(world,this.body);


    this.color=color("red","white","yellow");
    }
    display(){

   push();
   translate(this.body.position.x,this.body.position.y);
   rotate(this.body.angle);
   fill(random(this.color));
   ellipseMode(RADIUS);
   ellipse(0,0,this.r,this.r);
   pop();

    }
}
