class Enemy{
    constructor(x,y,width,height){
        var options = {
            density: 5,
            restitution: 0.5,
            friction:1,
           
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image =  loadImage("Monster-01.png")
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        image(this.image, 0, 0, 200, 200)
        pop()
    }
}