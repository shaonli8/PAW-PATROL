class String {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.5,
        // angularStiffness: 1,
        length: 250
      };
      this.pointB = pointB;
      this.pointX = bodyA.x;
      this.pointY = bodyA.y - 250;
      this.string = Constraint.create(options);
      World.add(world, this.string);
    }
  
    display() {
      if (this.string.bodyA) {
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3.5);
        stroke("black")
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
      }
    }
  }