const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var pawPetrol;
var child;
var slide,pool;
var poolImg,slideImg,kidImg;
var engine,world;
var y=200;
var score=0;
var rescue=0;

gamestate=0

function preload(){
    backImg=loadImage("backImg4.png");
    poolImg=loadImage("pool.jpeg");
    poolImg2=loadImage("pool2.png");
    slideImg=loadImage("slide.png");
    kidImg=loadImage("kid.png")
}

function setup(){
    createCanvas(800,600)
       engine = Engine.create();
       world = engine.world;
      

       pawPetrol=new PawPetrol(200,70,80);

       child=new Child(720,50,60);

       pool=new Pool(400,550,800,20);

       slide=new Slide(600,320,10,500,120);

       string = new String(pawPetrol.body, {x:200, y:50})
       
}
function draw(){
    background(0);

    Engine.update(engine);
    imageMode(CENTER)

    image(poolImg,430,350,900,700)
    image(slideImg,650,300,650,600)
    child.display();
    
    image(poolImg2,400,470,800,300)
    
    pawPetrol.display();

    //string.display();
    drawSprites();
    //slide.display()
    //pool.display()

    child.rescue();

    if(score===21){
        textSize(40)
        fill("black")
        text("RESCUED!!!",300,100)  
    }
    if(child.body.position.y>450){
        textSize(40)
        fill("red")
        text("FAILED!!!",300,100) 
        Body.setStatic(pawPetrol.body,true)
    }
    
}

function mouseDragged(){
    Matter.Body.setPosition(pawPetrol.body, {x: mouseX , y: mouseY})
}

