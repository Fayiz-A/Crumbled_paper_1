//the dustbin class
class dustbinSide {
    constructor(x, y, width, height) {
        var properties = {
            isStatic: true, 
            friction:0.3, 
            density:1.0
        }

        this.side = Bodies.rectangle(x, y, width, height, properties);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        World.add(world, this.side);
    }

    display() {
        var pos = this.side.position;
        rectMode(CENTER);
        var boxSide = createSprite(pos.x, pos.y, this.width, this.height);
        boxSide.shapeColor = color(150, 220, 10);
    }
}