const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for (var k = 0; k <=500; k = k +155){
    divisions.push(new Divisions(k, height - divisionsHeight/2, 10, divisionsHeight));
  }  
  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=25; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=0; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0);
  Engine.update(engine);
  for (var a = 0; a < Divisions.length;a++){
    divisions[a].display()
  }
   
  for (var k = 0; k<particles.length; k++) {
    particles[k].display();
  }

  for (var n = 0; n<plinkos.length; n++) {
    plinkos[n].display();
  }
 
  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  ground.display()
  drawSprites();
}