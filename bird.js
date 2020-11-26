class Bird {
    constructor(x, y, r){
        const options = {
            restitution: 1 //elasticity
        }
        this.body = Matter.Bodies.circle(x,y,r, options);
        Matter.Body.setDensity(this.body, 0.001); //mass of body
        // Matter.Body.setMass(this.body, this.body.mass*2);
        Matter.World.add(world, this.body);
        this.r = r;
    }

    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        imageMode(CENTER);
        image(dotImg, 0, 0, this.r*2, this.r*2);
        pop();
    }
}