class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.square(x, y, 50,50, options);
      this.width = 50;
      this.height = 50;
      
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
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  