class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 100
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {
        if (this.chain.bodyA != null) {

            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }





    }



    fly() {

        this.chain.bodyA = null;


    }


    attach(body) {
        
this.chain.bodyA = body;


    }
}