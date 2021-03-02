class Sling{
    constructor(bodyA, pointB){
        var options = {
            stiffness: 1.2,
            length: 400,
            bodyA: bodyA,
            pointB: pointB
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
     this.sling.bodyA = null;
     
 }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
       
    }
    
}