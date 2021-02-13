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
    createCanvas(800,700)
       engine = Engine.create();
       world = engine.world;
      

       pawPetrol=new PawPetrol(200,170,80);

       child=new Child(720,150,60);

       pool=new Pool(400,650,800,20);

       slide=new Slide(600,420,10,500,120);

       string = new String(pawPetrol.body, {x:200, y:150})
       
}
function draw(){
    background(0);
    textSize(25)
    fill("white")
    text("Drag the paw-patrol with mouse to make it fly and rescue the kid!!!",30,50)  
    Engine.update(engine);
    imageMode(CENTER)

    image(poolImg,430,450,900,700)
    image(slideImg,650,400,650,600)
    child.display();
    
    image(poolImg2,400,570,800,300)
    
    pawPetrol.display();

    //string.display();
    drawSprites();
    //slide.display()
    //pool.display()

    child.rescue();

    if(score===21){
        textSize(40)
        fill("black")
        text("RESCUED!!!",300,200)  
    }
    if(child.body.position.y>550){
        textSize(40)
        fill("red")
        text("FAILED!!!",300,200) 
        Body.setStatic(pawPetrol.body,true)
    }
    
}

function mouseDragged(){
    Matter.Body.setPosition(pawPetrol.body, {x: mouseX , y: mouseY})
}

