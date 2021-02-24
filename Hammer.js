class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 10,100, options);
      this.width = 10;
      this.height = 10;
      
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
      fill("cyan");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  