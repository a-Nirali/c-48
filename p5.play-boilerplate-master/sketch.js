const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var bg;
var tube1,tube2,tube3,tube4,tube5;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16;


function preload(){
  bg = loadImage("bg.jpg");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  engine=Engine.create();
  world=engine.world;
  tube1 = new Tube(230,200,60,120);
  tube2 = new Tube(500,200,60,120);
  tube3 = new Tube(700,200,60,120);
  tube4 = new Tube(900,200,60,120);

 
 ball1 = new Ball(230,160,15,15);
 ball2 = new Ball(230,190,15,15);
 ball3 = new Ball(230,220,15,15);
 ball4 = new Ball(230,245,15,15);

 ball5 = new Ball(500,160,15,15);
 ball6 = new Ball(500,190,15,15);
 ball7 = new Ball(500,220,15,15);
 ball8 = new Ball(500,245,15,15);

 ball9 = new Ball(700,245,15,15);
 ball10 = new Ball(700,220,15,15);
 ball11 = new Ball(700,190,15,15);
 ball12 = new Ball(700,160,15,15);

 ball13 = new Ball(900,160,15,15);
 ball14 = new Ball(900,190,15,15);
 ball15 = new Ball(900,220,15,15);
 ball16 = new Ball(900,245,15,15);

}
function draw() {
  background(bg);  
 Engine.update(engine);
 
 tube1.display();
 tube2.display();
 tube3.display();
 tube4.display();

 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();

 ball5.display();
 ball6.display();
 ball7.display();
 ball8.display();

 ball9.display();
 ball10.display();
 ball11.display();
 ball12.display();

 ball13.display();
 ball14.display();
 ball15.display();
 ball16.display();
}
