class Ground{
    constructor(x,y,w,h)
    {
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,w,h,options)
    this.w=w;
    this.h=h;
    World.add(world,this.body)
    
    
    
    
    }
    
    show(){
    var pos = this.body.position;
    push()
    rectMode(CENTER)
    fill (184)
    rect(pos.x,pos.y,this.w,this.h)
    pop()
    
    
    }
    
    
    
    
    
    
    
    
    }