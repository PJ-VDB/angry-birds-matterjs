const { Engine, World, Bodies, Constraint } = Matter;

var MouseConstraint = Matter.MouseConstraint;

let ground;
let box;
let bird;
let world, engine;
let mConstraint;
let boxes=[];

let dotImg;
let boxImg;
function preload(){
    dotImg = loadImage('pjface.png');
    boxImg = loadImage('block.png');
}

function setup() {
    const canvas = createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;

    //define objects
    ground = new Ground(width/2, height-10, width, 20);
    for(let i = 0; i < 3; i++){
            boxes[i] = new Box(450, 300-i*75, 50, 75);

    }

    bird = new Bird(150,300,25);
    
    slingshot = new Slingshot(150, 300, bird.body);

    var mouse = Matter.Mouse.create(canvas.elt),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
        });

     mouseConstraint.mouse.pixelRatio = 2;
        
    World.add(world, mouseConstraint);
    
    Matter.Events.trigger(engine, 'tick')

}

 function keyPressed() {
     if (key == ' ') {
         World.remove(world, bird.body);
         bird = new Bird(150, 300, 25);
         slingshot.attach(bird.body);
     }
 }

 function mouseReleased(){
     setTimeout(() => {
     slingshot.fly();
     }, 200);
 }

function draw() {
    background(0);
    Engine.update(engine);
    ground.show();
    for(let box of boxes){
            box.show();
    };
    slingshot.show();
    bird.show();
}