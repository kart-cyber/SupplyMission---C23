class block{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){ 
        rectMode(CENTER);
        fill("red");


        rect(350, 615, 10,100);
        rect(450, 615, 10, 100);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
      }
}