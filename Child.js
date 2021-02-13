class Child{
    constructor(x,y,r){
       var options = {
           //restitution:0.8,
           friction:1.0,
           density:1.0
       }   
       this.body=Bodies.circle(x,y,r,options);
       this.r=r;
       World.add(world,this.body);
       this.image=loadImage("kid.png")
       this.vis=255;
    }
    display(){
        var angle=this.body.angle;

        if(this.body.speed<7){
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,200,200);
            console.log(this.body.speed)
            // ellipseMode(RADIUS);
            // ellipse(0,0,this.r,this.r);
            pop();
        }
        else{
            push()
            World.remove(world,this.body);
            this.vis=this.vis-5;
            tint(255,this.vis);
            image(this.image,this.body.position.x,this.body.position.y,200,200)
            pop();
        }
    }
    
    rescue(){
        if (this.vis<=0 && this.vis>=-100){
            score=score+1;
        }
    }
}