class Particle {
    constructor(x,y) {
      var options = {
          restitution: 0.5
      }
      
      this.r = 10
      this.body = Bodies.circle(x,y,this.r,options);
      this.width = this.r;
      this.height = this.r;
      this.color = color(random(0,255), random(0,255), random(0,255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        angleMode(RADIANS);
      ellipseMode(RADIUS);
    fill(this.color);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };