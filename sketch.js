//array with same data type
var arr1 = [1,2,3,4,5,6,7,8];
console.log(arr1);

//array with different data type
var arr2 = ["Vivek",9,true]
console.log(arr2)

//arrays with list of arrays
var arr3 = [ [1,2,3], ["a","b","c"], [true,false]  ]
console.log(arr3)

console.log(arr2[0])

console.log(arr3[0][0]);
console.log(arr3[1][1])

arr1.push(9);
console.log(arr1);

arr1.pop();
console.log(arr1);


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var sling;
var gameState="onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(150,305,300,170)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,60);
    slingshot=  new SlingShot(bird.body,{x:200,y:60});

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    platform.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    

    bird.display();
    slingshot.display();
}

function mouseDragged(){
    if(gameState!=="launched"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased(){
    slingshot.fly();
    gameState="launched"
}
function keyPressed(){
    if(keyCode===32){
       // slingshot.attach(bird.body)
    }
}