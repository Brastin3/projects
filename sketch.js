var canvas;
var x;
var y;
var xs = 4;
var ys = 4;
var s_logo;
var mode = 1;
var bg;
var darkmode = false;
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
  bg=color(33, 111, 237);
}

function draw(){
  if(mode==1){
    background(bg);

    if(y<0||y+175>height){
      ys=-ys;
    }
    if(x<0||x+400>width){
      xs=-xs;
    }
    x+=xs;
    y+=ys;
    if(darkmode){
      tint(33, 111, 237);
    }else{
      tint(255,255,255);
    }
    image(s_logo,x,y);
  }
  if(mode==2){
    fill(255);
    textSize(72);
    text(char(int(random(0,256))),random(0,width),random(0,height));
  }
  //text("yeet",200,500);
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

function keyPressed(){

  if(key=='1'){
    mode=1;
  }
  if(key=='2'){
    mode=2;
  }
  if(key=='3'){
    this.moveTo(20,20);
  }

}

function toggleDarkLight() {
  var body = document.getElementById('body');
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  darkmode=!darkmode;
  if(darkmode){
    bg=color(33, 39, 48);
  }else{
    bg=color(33, 111, 237);
  }

}
