class SlingShot{
    constructor(body1,point){
         var options={
             bodyA:body1,
             pointB:point,
             stiffness:0.04,
             length:20
         }
         this.sling1=loadImage("sprites/sling1.png");
         this.sling2=loadImage("sprites/sling2.png");
         this.sling3=loadImage("sprites/sling3.png");
         this.pointB=point
         this.sling=Constraint.create(options);
            World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        image(this.sling1,200,70,30,150);
        image(this.sling2,180,60,30,100)
        if(this.sling.bodyA){
            var point1=this.sling.bodyA.position;
            var point2=this.pointB;
            push()
            if(point1.x < 220){
                stroke(61,29,11);
                strokeWeight(3);
                line(point1.x-25,point1.y,point2.x-15,point2.y+20)
                line(point1.x-25,point1.y,point2.x+20,point2.y+30)
                image(this.sling3,point1.x-25,point1.y-10,15,30)

            }
            else {
                stroke(61,29,11);
                strokeWeight(3);
                line(point1.x-25,point1.y,point2.x-15,point2.y+20)
                line(point1.x-25,point1.y,point2.x+20,point2.y+30)
                image(this.sling3,point1.x+25,point1.y-10,15,30)
            }
           
            pop();
        }
    }
}