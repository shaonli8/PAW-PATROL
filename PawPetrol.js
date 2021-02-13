class PawPetrol{
    constructor(x,y,r){
       var options = {
           //restitution:0.8,
           friction:1.0,
           density:1.0
       }   
       this.body=Bodies.circle(x,y,r,options);
       this.r=r;
       World.add(world,this.body);
       this.image=loadImage("skyee.png");
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        var angle=this.body.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,150,150);

        // ellipseMode(RADIUS);
        // ellipse(0,0,this.r,this.r);
        pop();
   }
}