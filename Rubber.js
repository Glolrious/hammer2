class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, 20,20, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      var angle = this.body.angle;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(0);
      rectMode(CENTER);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  