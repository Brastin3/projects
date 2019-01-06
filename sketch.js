var canvas;
var x;
var y;
var xs = 4;
var ys = 4;
var s_logo;

function preload(){
  s_logo=loadImage("cool/dvd.png");
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-1");
  x=width/2;
  y=height/2;
  xs=4;
  ys=4;
}

function draw(){
  background(33, 111, 237);
  if(y<0||y+175>height){
    ys=-ys;
  }
  if(x<0||x+400>width){
    xs=-xs;
  }
  x+=xs;
  y+=ys;
  image(s_logo,x,y)
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  if(y<0||y+175>height){
    y=0
  }
  if(x<0||x+400>width){
    x=0
  }
}
