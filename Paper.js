class Paper{
    constructor(x,y,radius) {
        var options = {
            'isStatic' : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("images/paper.png");
        
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS)
        stroke(255)
        fill(255)
        circle(pos.x, pos.y, this.radius);
        image.scale = 0.5;
        image(this.image,pos.x-78,pos.y-78,150,150)
        
    }
}