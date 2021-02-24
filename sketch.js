var hammer, rubber, stone ;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    hammer = new hammer(700,320,10,10);
    ground = new Ground(600,height,1200,20);
    stone = new stone(810,260,300,PI/2);
    
    rubber = new rubber(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    hammer.display();
    stone.display();
    ground.display();
    rubber.display();
    
}

