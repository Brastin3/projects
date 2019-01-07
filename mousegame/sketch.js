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
  textAlign(CENTER);
}

function draw(){
  textSize(24);
  background(33, 111, 237);
  if(!ingame){
    fill(255);

    if(prevgame){
      text("Click to play",width/2,height/2-40);
      text("Your score: "+score,width/2,height/2+20);
      if(score>40){
        text("You are incredibly good at this!",width/2,height/2+60);
      }else if(score>30){
        text("You are very good!",width/2,height/2+60);
      }else if(score>20){
        text("You did well!",width/2,height/2+60);
      }else if(score>10){
        text("Keep it up!",width/2,height/2+60);
      }else{
        text("Keep practicing.",width/2,height/2+60);
      }

    }else{
      text("Click to play",width/2,height/2);
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
    if(mouseX>sx-sd&&mouseX<sx+sd&&mouseY>sy-sd&&mouseY<sy+sd){
      fill(79, 175, 234);
    }
    rect(int(sx-sd),int(sy-sd),int(sd*2),int(sd*2));

  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function resetgame(){
  stage=0;
  score=0;
  maxtime=4000;
  time=4000;
  starttime=millis();
  sx=random(0+50,width-50);
  sy=random(0+50,height-50);
  sd=80;
}

function timerend(){
  if(mouseX>sx-sd&&mouseX<sx+sd&&mouseY>sy-sd&&mouseY<sy+sd){
    sx=random(0+100,width-50);
    sy=random(0+50,height-50);
    sd=sd*0.95;
    maxtime=maxtime-250;
    if(maxtime<1250){
      maxtime=1250;
    }
    time=maxtime;
    starttime=millis();
    score++;
  }else{
    ingame=false;
    prevgame=true;
  }


}
