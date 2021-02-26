class Sand {
    constructor(x, y) {
      var options = {
          'restitution':0.4,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 20;
      this.height = 20;
      
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
      stroke("white");
      fill("brown");
      ellipse(0, 0, 20, 20);
      pop();
    }
  }