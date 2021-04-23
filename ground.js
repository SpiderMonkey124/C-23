class Ground{
    //properties
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h = height;
        World.add(world,this.body);
    }

    //functions
    display(){
        var pos = this.body.position;
        fill("maroon")
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);

    }
}