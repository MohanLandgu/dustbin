class Ground{

    constructor(x,y,width,height){


        var balloption={
            isStatic:true
        }

    this.body=Bodies.rectangle(x,y,width,height,balloption);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
   
    display(){
       
        
       
        rectMode(CENTER);
        fill("green");
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        


    }







}