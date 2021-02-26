class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, 80, options);
      this.width = 80;
      this.height = 80;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      var angle = this.body.angle
      push ()
      translate(pos.x,pos.y)
      rotate (angle)
  
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("blue");
      ellipse(0, 0, 80, 80);
      pop();
    }
  }