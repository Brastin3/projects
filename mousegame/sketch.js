var sx;
var sy;
var sd;
var time;
var score;
var stage;
var maxtime;
var ingame = false;
var starttime;
var prevgame;
function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
}

function draw(){
  textSize(24);
  background(33, 111, 237);
  if(!ingame){
    fill(255);
    text("Click to play",width/2,height/2);
    if(prevgame){
      text("Your score: "+score,width/2,height/2+40);
    }
    if(mouseIsPressed){
      ingame=true;
      resetgame();

    }
  }

  if(ingame){
    fill(79, 175, 234);
    time=maxtime-(millis()-starttime);
    rect(0,0,map(time,0,maxtime,0,width),30);
    if(time<=0){
      timerend();
    }
    fill(255);
    rect(int(sx),int(sy),int(sd),int(sd));

  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function resetgame(){
  stage=0;
  score=0;
  maxtime=5000;
  time=5000;
  starttime=millis();
  sx=random(0+50,width-50);
  sy=random(0+50,height-50);
  sd=100;
}

function timerend(){
  if(mouseX>sx-sd&&mouseX<sx+sd&&mouseY>sy-sd&&mouseY<sy+sd){
    sx=random(0+100,width-50);
    sy=random(0+50,height-50);
    sd=sd*0.9;
    maxtime=maxtime*0.95;
    time=maxtime;
    starttime=millis();
    score++;
  }else{
    ingame=false;
    prevgame=true;
  }


}
