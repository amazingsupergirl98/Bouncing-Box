var canvas;
var music;
var floor1,floor2,floor3,floor4;
var strickerA,strickerB;
function preload(){}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    floor1=createSprite(70,590,150,30);
    floor1.shapeColor="blue";

    floor2=createSprite(250,590,150,30);
    floor2.shapeColor="red";

    floor3=createSprite(430,590,150,30);
    floor3.shapeColor="green";

    floor4=createSprite(610,590,150,30);
    floor4.shapeColor="yellow";


    //create box sprite and give velocity
    strickerA=createSprite(0,500,35,35);
    strickerA.shapeColor="white";
    strickerA.velocityY=4;
    strickerA.velocityX=4;

   
 
}

function draw() {
    background("purple");
    //create edgeSprite
    edges= createEdgeSprites();


    //add condition to check if box touching surface and make it box
   
    //stricker.bounceOff(EdgeSprites);
   
   
    if(floor1.isTouching(strickerA)){
        strickerA.bounceOff(floor1);
        strickerA.shapeColor="blue";
        
    }
    if(floor2.isTouching(strickerA)){
        strickerA.bounceOff(floor2);
        strickerA.shapeColor="red";
        
    }
    if(floor3.isTouching(strickerA)){
        strickerA.bounceOff(floor3);
        strickerA.shapeColor="green";
       
    } 
    if(floor4.isTouching(strickerA)){
        strickerA.bounceOff(floor4);
        strickerA.shapeColor="yellow";
       
    }
    
    strickerA.bounceOff(edges);  
        
    
        
    

    drawSprites();
}
