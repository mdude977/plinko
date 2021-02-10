const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var divisionHeight = 340;
function setup() {
  createCanvas(560,840);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (width/2,height,width,20)

  for (var k = 0; k <=width; k = k + 80) {
		divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    
    //create Plinkos
    for (var k = 75; k <=width-100; k=k+100) 
    {
      for (var j = 40; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,k));
    }
  }
  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  fill(255);
  textSize(30)
  text("Score : "+score,20,30);

  //display Divisions
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
    }
  //display Plinkos
    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      
    }

    //Create Particles
    if(frameCount%60===0){
      particles.push(new Particle(random(50,width-100),100));
      //console.log(particles);
      //console.log(particles.length)
      score++;
      }
    
     for (var j = 0; j < particles.length; j++) {
      
      particles[j].display();
      console.log(j)
      }
 

}