class Ball{
    constructor(){
        var options = {
            //isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(200,200,60,options)
        this.radius = 60;
        this.image = loadImage('paper.png')
        World.add(world,this.body)
    }
    display(){
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(RADIUS);
      image( this.image,0, 0, this.radius,this.radius);
      pop();

    }
}