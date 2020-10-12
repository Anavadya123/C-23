const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,ground,ob_options,ball,ball_options;


function setup() {
  createCanvas(400,400);
  myEngine=Engine.create() //myEngine.world
  myWorld=myEngine.world;

  ob_options={
    isStatic:true
  }


  ball_options = {
    restitution:1
  }
  ground=Bodies.rectangle(200,390,400,20, ob_options);
  World.add(myWorld,ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

  ball=Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);            
}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER);  
  rect(ground.position.x, ground.position.y, 400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}