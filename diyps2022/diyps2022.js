var img;
var initials ='em'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img1 = loadImage('https://emmamorales20.github.io/images/brush2.png');
  img2 = loadImage('https://emmamorales20.github.io/images/brush5.png');
  img3 = loadImage('https://emmamorales20.github.io/images/bunny1.png');
  img4 = loadImage('https://emmamorales20.github.io/images/bunny2.png');
  img5 = loadImage('https://emmamorales20.github.io/images/flyingbunny.png');
  img6 = loadImage('https://emmamorales20.github.io/images/house.png');
  img7 = loadImage('https://emmamorales20.github.io/images/pinktulip.png');
  img8 = loadImage('https://emmamorales20.github.io/images/rainbow.png');
  img9 = loadImage('https://emmamorales20.github.io/images/r9edtulip.png');
  img10 = loadImage('https://emmamorales20.github.io/images/sun.png');
  img11 = loadImage('https://emmamorales20.github.io/images/sunflower.png');
  img12 = loadImage('https://emmamorales20.github.io/images/tree.png');
}


function setup() {
createCanvas(600, 600);  // canvas size
background(209, 237, 242);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    image(img1, mouseX, mouseY);
    
  } else if (toolChoice == '2') { // second tool
    image(img2, mouseX, mouseY);
    
  } else if (toolChoice == '3') { // third tool
    image(img3, mouseX, mouseY);
    
  } else if (toolChoice == '4') {
    image(img4, mouseX, mouseY);
    
   
  } else if (key == '5') { // this tool calls a function
    image(img5, mouseX, mouseY);
   
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
 
  } else if (toolChoice == '6') { // image 
    image(img6, mouseX, mouseY);
    
  } else if (toolChoice == '7') {
    image(img7, mouseX, mouseY);
    
  } else if (toolChoice == '8') {
    image(img8, mouseX, mouseY);
    
  } else if (toolChoice == '9') {
    image(img9, mouseX, mouseY);
    
  } else if (toolChoice == '0') {
    image(img10, mouseX, mouseY);
    
  } else if (toolChoice == 'q' || toolChoice == 'Q') { // g places the image we pre-loaded
    image(img11, mouseX, mouseY);
    
  } else if (toolChoice == 'w' || toolChoice == 'W') { // g places the image we pre-loaded
    image(img12, mouseX, mouseY);
     
    
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
