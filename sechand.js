class shand {
    constructor(x,y,w,h){
      var  options={
isStatic:true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = width;
        this.h = height;
        World.add(world, this.body)
    }
    draw(){
     push();
rotate(sAngle);
stroke(255,0,0)
strokeWeight(7);
    line(0,0,100,10)
pop()
}
}