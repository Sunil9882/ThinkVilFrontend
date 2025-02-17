
//INPUT VARIABLES
let least_count,Shape,Hide_btn;
//CONTROL VARIABLES
let Random_Dim,Show_Dim,fullbtn;
let Zoom=1;


let caliper_main;
let caliper_upper;

let R_Dim=0;                //According Real Measerment 
let R_SDim=0;               //for scaleup the dimension for show shapes in big size

const responsivesize=900;
let ResponsiveSmallsize;
let ResponsiveBigsize;

function preload(){
  caliper_main=loadImage('images/calipar main.png');
  caliper_upper=loadImage('images/calipar upper.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  input();
  ResponsiveBigsize();
  if(windowWidth<=responsivesize){           //SMALL SCREEN SIZE LIKE SMARTPHONES            
    if (window.orientation === 0) {
      alert("Open the simulation in Landscape mode and press Full-Screen button for the better experience.");
    }
  ResponsiveSmallsize();
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  if(windowWidth<=responsivesize){  
    ResponsiveSmallsize();
  }else{
    ResponsiveBigsize();
  }
}

let X=0;
function mouseDragged() {
  if(mouseY<height/2){
    X+=(mouseX-pmouseX);
    X = constrain(X, R_SDim, 800);         // constrain X position within a specific range
  }
}

function draw() {
  background(140,195,255);
  translate(windowWidth/2,windowHeight/2);
  scale(Zoom);                            //scale the varnier w.r.t origin
  push();
    Varnier_calipers();
    push();
      translate(-443,150);
      Random_Shapes();
    pop();
  pop();
  

}
// ----------VARNIER CALIPERS -------------------------------------------
function Varnier_calipers (){
    push();
    //Upper caliper 
      image(caliper_main,100,0);
      push();
        translate(-420,-40);
        for(let i=0;i<11;i++){
            line(100*i,0,100*i,20);
            text(i,100*i,0)
        }
        for(let i=0;i<22;i++){
          line(50*i,3,50*i,20);
        }
        for(let i=0;i<110;i++){
            line(10*i,5,10*i,20);
        }
      pop();
    //Lower caliper
      image(caliper_upper,X-304,0);
        push();
            text("cm",680,-40);
            translate(-420+X,-30);
            for(let i=0;i<2;i++){
                line(90*i,0,90*i,15);
                text(i,90*i+2,20)
            }
            for(let i=0;i<2;i++){
              line(45*i,0,45*i,12);
          }
            for(let i=0;i<10;i++){
                line(9*i,0,9*i,10);
            }
      pop();  
    pop();
}
// -------------------------REANDOM SHAPES--------------------------------
function Random_Shapes(){
  push();
    fill(180);
      if(Shape.value()==='circular'){
        circle(R_SDim/2,0,R_SDim);

      }else if(Shape.value()==='rectangular'){
        rect(R_SDim/2,0,R_SDim,R_SDim);

      }else if(Shape.value()==='triangular'){
        triangle(0,40,0,-160,R_SDim,-60);
      }
  pop();

}







