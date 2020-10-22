class Ball{
constructor(x,y,radius){
    var options={

        friction:0.5,
        restitution:0.3,
        density:1.499
    }
    this.radius=radius
this.x=x;
this.y=y;
this.body=Bodies.circle(x,y,radius,options)

this.image=loadImage("image/paper.png")

World.add(world,this.body)
}
display(){
   
    
    imageMode(RADIUS) 
     push()
    
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
image(this.image,0,0,this.radius,this.radius)
pop();
}


}