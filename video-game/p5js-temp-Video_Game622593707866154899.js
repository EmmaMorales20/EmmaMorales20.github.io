var ballx = 300; // width/2 ?
var bally = 300;
var ballSize = 40;
var score =0;
var img1, img2, beginImg;
var  c; // our text color as a variable, set in setup
var gameState ="begin";

function preload() {
    img1 = loadImage('https://emmamorales20.github.io/images/paw-print.png');
    img2 = loadImage('https://emmamorales20.github.io/images/mr-rat.png');
    img3 = loadImage('https://emmamorales20.github.io/images/livingroom.jpg');
    img4 = loadImage('https://emmamorales20.github.io/images/brown-paw.png');
    img5 = loadImage('https://emmamorales20.github.io/images/light-gray-rat.png');
    img6 = loadImage('https://emmamorales20.github.io/images/fancy-livingroom.jpg');
    img7 = loadImage('https://emmamorales20.github.io/images/black-paw.png');
    img8 = loadImage('https://emmamorales20.github.io/images/brown-rat.png');
    img9 = loadImage('https://emmamorales20.github.io/images/livingroom-three.jpg');
    beginImg = loadImage('https://emmamorales20.github.io/images/cat-rat.png');
    endImg = loadImage('https://emmamorales20.github.io/images/you-win.png');
}

function setup() {
  createCanvas(900, 640);
  textAlign(CENTER);
  textSize(20);
} // end of setup


function draw() {  
if(gameState =="begin"){
  let c =color(253, 241, 211); //text color
  fill(c);
  background(beginImg);
  beginGame();
}

if(gameState =="L1"){
  let c =color(0, 0, 0); //text color
  fill(c);
  background(img3);
  cursor('https://emmamorales20.github.io/images/paw-print.png');
  levelOne();
}
if(gameState =="L2"){
  levelTwo();
}
if(gameState =="L3"){
  levelThree();
}
if(gameState =="Win"){
  let c =color(253, 241, 211); //text color
  fill(c);
  win();
}
  text(("Score: " + score), width/2, 40);
} // end of draw

function beginGame(){
 if (mouseIsPressed === true) {
  gameState="L1";  
 } // end of if mousIsPressed
} // end of beginGame


function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=10){
    gameState= "L2";
  }
  //line(ballx+20, bally+20, mouseX, mouseY);
  image(img2, ballx, bally);
} // end of level 1  ===================================================================


function levelTwo(){
  background(img9);
  cursor('https://emmamorales20.github.io/images/black-paw.png');
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=20){
       gameState= "L3";
  }
   image(img5, ballx, bally);
} // end of level 2

function levelThree(){
  background(img6);
  cursor('https://emmamorales20.github.io/images/brown-paw.png');
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
    ballSize=ballSize -1;
  } // end if
  if (score>=35){
       gameState= "Win";
  }
      image(img8, ballx, bally, ballSize, ballSize);
} // end level 3

function win(){
  background(endImg);
  
  text("You Won", width/2, height-20);
} // end win
