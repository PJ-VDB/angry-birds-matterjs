class Slingshot {
    constructor(x, y, body) {
        const options = {
            stiffness: 0.01,
            length: 30,
            pointA: {
                x: x,
                y: y
            },
            bodyB: body
        };
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyB = null;
    }

    attach(body){
        this.sling.bodyB = body;
    }

    show() {
        if (this.sling.bodyB) {
            stroke(255);
            const posA = this.sling.pointA;
            const posB = this.sling.bodyB.position;
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}