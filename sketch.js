 const Engine=Matter.Engine
 const World=Matter.World
 const Bodies=Matter.Bodies
 var engine,world
 var ground
 var ball


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var ball_ops={
    isStatic:false,
    restitution:1.0
  }
  var ground_ops={
    isStatic:true
  }
  ball=Bodies.circle(200,200,20,ball_ops)
  World.add(world,ball)
  
  ground=Bodies.rectangle(200,400,400,20,ground_ops)
  World.add(world,ground)

}

function draw() {
  background("black");  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)

}