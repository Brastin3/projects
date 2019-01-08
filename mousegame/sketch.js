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
var mode;
var clicked;
var hovered;
var high = 0;
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
    text("Display size: "+width+"x"+height,width/2,height/2+100);
    if(prevgame){
      text("Click to play",width/2,height/2-40);
      text("Your score: "+score,width/2,height/2+20);
      text("Highest score this session: "+high,width/2,40);
      if(width<300||height<400){
        textSize(12);
        text("You have an awfully small display size.\n"+width+"x"+height,width/2,height/2+40);
        textSize(24);
      }else{
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

      }
    }else{
      text("Click to play",width/2,height/2);
      if(width<300||height<400){
        textSize(12);
        text("After resizing your window, of course.\n"+width+"x"+height,width/2,height/2+40);
        textSize(12);
      }

    }

    //text("Stay inside mode",width/3,height/2)
    rect(width/2-100);

    if(mouseIsPressed&&height>300&&width>300){
      ingame=true;
      resetgame();
    }
  }

  if(ingame){
    fill(39, 57, 71);
    rect(0,0,width,30);
    fill(79, 175, 234);
    time=maxtime-(millis()-starttime);
    if(map(time,0,maxtime,0,width)<width/4){
      fill(255,200,200)
    }
    rect(0,0,map(time,0,maxtime,0,width),30);
    if(time<=0){
      timerend();
    }
    fill(255);
    if(mouseX>=sx-sd&&mouseX<=sx+sd&&mouseY>=sy-sd&&mouseY<=sy+sd){
      fill(172, 255, 71);
      if(mouseIsPressed){
        clicked=true;
      }
      hovered=true;
    }else{
      hovered=false;
    }
    if(mode==1&&clicked){
      fill(79, 175, 234);
    }
    if(mode==2&&hovered){
      fill(79, 175, 234);
    }
    rect(int(sx-sd),int(sy-sd),int(sd*2),int(sd*2));

    fill(255);
    if(hovered){
      text(score,sx,sy-sd-20);
    }

    text(score,width/2,24);
    textAlign(RIGHT);
    text("Square size: "+int(sd*2)+"px",width-10,24);
    textAlign(CENTER);

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
  if(mouseX>=sx-sd&&mouseX<=sx+sd&&mouseY>=sy-sd&&mouseY<=sy+sd){
    updatesquare();
  }else if(mode==1&&clicked){
    updatesquare();
  }else if (mode==2&&hovered){
    updatesquare();
  }else{
    ingame=false;
    prevgame=true;
    if(score>high){
      high=score;
    }
  }
}

function updatesquare(){
  sx=random(0+100,width-50);
  sy=random(0+50,height-50);
  sd=sd*0.95;
  maxtime=maxtime-250;
  if(maxtime<1250){
    maxtime=1250;
  }
  if(sd<5){
    sd=5;
  }
  time=maxtime;
  starttime=millis();
  score++;
  clicked=false;
}
