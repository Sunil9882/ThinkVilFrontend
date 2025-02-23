
//INPUT VARIABLES
let A_,B,C;                   //quadratic equation coefficiets

//Solution variable
let Output_ROOT;
let Output_Axis_OS
let Output_Yintersect;
let Output_Vertex;
let Show_Sol1;       
//At point X box variables
let X_cord;                    //X coordinate value
let Y_at_X;
let Tangent
let Show_Sol2;
//domain and range variables
let Domain_Range;
let Domain_type;
let Domain_X1_Value;
let Domain_X2_Value;
let Show_Sol3;
// let take scale 1m=25px
let Scale=25;
let Zoom=1;

//---------Responsive size----------------------------------
let Medium_size=1400;
let Small_size=500;
let ResponsiveBigsize,ResponsiveMediumsize,ResponsiveSmallsize;

let Canvas; 
function setup() {
   Canvas=createCanvas(window.outerWidth, window.outerHeight);
  angleMode(DEGREES);
  input();
  if(window.outerWidth<=Small_size && window.outerHeight>window.outerWidth){
    ResponsiveSmallsize();
  }
  else if(Small_size<window.outerWidth && window.outerWidth<=Medium_size){
    ResponsiveMediumsize();
  }
  else if( window.outerWidth>Medium_size){
    ResponsiveBigsize();
    ResponsiveSmallsize();

  }
}

function windowResized() {
  resizeCanvas(window.outerWidth, window.outerHeight);

    if (window.outerHeight<=Small_size && window.outerWidth > window.outerHeight) { // height and width interchange because change of orientation
      ResponsiveSmallsize();
    } 
    else if (Small_size<window.outerWidth && window.outerWidth <= Medium_size) {
      ResponsiveMediumsize();
    } 
    else if (window.outerWidth>Medium_size) {
      ResponsiveBigsize();
    }
}




let Scrol_X=0,Scrol_Y=0;        //for dragging the graph by mouse
function mouseDragged(){
  if (mouseX<=width){
    Scrol_X+=(mouseX-pmouseX);
    Scrol_Y+=(mouseY-pmouseY);
  }
  
}

function draw() {
  background(255,255,150);
  translate(width/2+Scrol_X,height/2+Scrol_Y);
  scale(1,-1);
  Quardatic_Eq1=new Quardatic_Eq(A.value(),B.value(),C.value(),X_cord.value(),Domain_type.value(),Domain_X1_Value.value(),Domain_X2_Value.value());
  Quardatic_Eq1.Grid();
  Quardatic_Eq1.Solution();
  Quardatic_Eq1.Equation();
  if(Show_Sol1){
    Quardatic_Eq1.Solution_show1();
  }
  if(Show_Sol2){
    Quardatic_Eq1.Solution_show2();
  }
  if(Show_Sol3){
  Quardatic_Eq1.Solution_show3();
  }
}
