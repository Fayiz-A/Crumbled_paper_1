//the paper class
class Paper{
    constructor(x, y, radius){
        var properties = {
            //some changes in the properties of the paper
            isStatic: false,
            friction:0.5,
            density:1.2,
            restitution: 0.3
        }

        this.body = Bodies.circle(x, y, radius, properties);//creates the paper according to the physics engine
        this.diameter = radius*2;
        this.x = x;
        this.y = y;

        World.add(world, this.body);//adds this paper to the world so that it acts according to the physics laws
    }

    display(){
        //function for displaying the objects
        var position = this.body.position;
        fill("white");
        noStroke();
        ellipse(position.x, position.y, this.diameter, this.diameter); 
    }
}