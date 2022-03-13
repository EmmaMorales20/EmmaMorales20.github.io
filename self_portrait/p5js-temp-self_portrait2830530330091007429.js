function setup() {
    createCanvas(700, 700);
    background(220);
    text("p5.js vers 0.9.0 test.", 10, 15);
}

function draw() {
  background(171, 215, 235);
  noStroke();
  
  // background weave
  fill(255,255,255,100);
  rect(0,0, 50, 700);
  rect(100,0, 50,700);
  rect(200,0, 50,700);
  rect(300,0, 50,700);
  rect(400,0, 50,700);
  rect(500,0, 50,700);
  rect(600,0, 50,700);
  rect(0, 0, 700, 50);
  rect(0, 100, 700,50);
  rect(0, 200, 700,50);
  rect(0, 300, 700,50);
  rect(0, 400, 700,50);
  rect(0, 500, 700,50);
  rect(0, 600, 700,50);
 
 //leaf
  stroke(70, 138, 11);
  fill(70, 138, 11);
  strokeWeight(3);
  beginShape();
  vertex(30, 20);
  bezierVertex(180, 10, 180,175, 130, 175);
  bezierVertex(150, 180, 160, 125, 130, 120);
  endShape();
 
  //orange
  stroke(250, 127, 40);
  fill(250, 127, 40);
  ellipse(350, 350, 580, 580);
  
  
  //face outline
 fill(237, 113, 64);
 ellipse(350, 385, 420, 420);
  
  
  //face
  fill(235, 202, 183);
  ellipse(350, 385, 380, 380);
  
  
  //eyes
  strokeWeight(0);
  fill(214, 168, 141);
  ellipse(250, 340, 70, 100); 
  strokeWeight(0);
  fill(214, 168, 141);
  ellipse(460, 340, 70, 100);  
  fill(82, 45, 18);
  //ellipse(250, 250, 70, 100);
  arc(250, 340, 70, 100, 0, radians(180));
  triangle(215, 340, 284, 325, 285, 340);  
  fill(254, 239, 236);
  //ellipse(250, 250, 70, 100);
  arc(233, 340, 30, 45, 0, radians(180));  
  fill(82, 45, 18);
  //ellipse(250, 250, 70, 100);
  arc(460, 340, 70, 100, 0, radians(180));
  triangle(425, 340, 426, 326, 495, 340);  
  fill(254, 239, 236);
  //ellipse(250, 250, 70, 100);
  arc(445, 335, 30, 42, 0, radians(190));


  // cheeks
  fill(253, 110, 150, 40);
  strokeWeight(0)
  ellipse(225, 430, 95, 45);
  ellipse(475, 430, 95, 45);
  
  
  //pit?
  fill(221, 86, 28, 150);
  //ellipse(350, 350, 100, 100);
  arc(295, 77, 120, 70, 0, radians(146), OPEN);
  
  
  //eyelid
  stroke(82, 45, 18)
  strokeWeight(8);
  line(210, 345, 290, 326);
  stroke(82, 45, 18)
  strokeWeight(8);
  line(422, 328, 500, 345);
  
  
  // nose squash c95b0c and apricot ed820e
  fill(235, 163, 87);
  strokeWeight(0);
  triangle(330, 420, 350, 355, 350, 420);
  fill(201, 117, 56);
  strokeWeight(0);
  triangle(350, 420, 350, 355, 370, 420);
  
  
  //mouth
  noFill()
  strokeWeight(6)
  //ellipse(250, 250, 70, 100);
  arc(315, 470, 70, 20, 0, radians(180));
  arc(385, 470, 70, 20, 0, radians(180));
  
  
  //hair
  stroke(56, 29, 9);
  fill(56, 29, 9);
  rect(275,195, 152, 15); 
  noFill();
  stroke(56, 29, 9);
  bezier(427, 210,   440, 320,   580, 280,   510, 425);
  bezier(521, 400,   484, 445,   530, 550,   435, 560);
  bezier(275, 210,   260, 320,   118, 280,   195, 425);
  bezier(183, 400,   220, 445,   160, 550,   265, 560);
  
  
  //hair color fill
  fill(56, 29, 9);
  triangle(447, 260,   427, 210,   497, 260); 
  quad(530, 334,   540, 334,   498, 266,   455, 266);
  quad(530, 340,   540, 340,   540, 440,   525, 460); 
  quad(512, 422,   530, 390,   530, 470,   500, 510);
  
  fill(56, 29, 9);
  triangle(200, 260,   275, 210,   254, 260); 
  quad(192, 266,   245, 266,   168, 334,   155, 334);
  quad(160, 334,   170, 334,   170, 450,   160, 450); 
  quad(175, 390,   190, 422,   195, 510,   170, 470);
  
  
  //widow's peak
  noFill();
  strokeWeight(16);
  //ellipse(250, 250, 70, 100);
  arc(315, 210, 70, 20, 0, radians(180));
  arc(385, 210, 70, 20, 0, radians(180));
 
  //face outline
  stroke(237, 113, 64);
  strokeWeight(17);
  circle(350, 385, 400);
  
  
  //stem
  rotate(HALF_PI / 3.0);
  fill (122, 57, 3);
  stroke('#333');
  stroke (122, 57, 3);
  strokeWeight(25);
  noFill();
  arc(255, 0, 190, 190, PI+0.9, -0.9);
  
  
  
  
}
