


var sechand,hourhand,minhand,hourAngle,minAngle,secAngle,h,m,s

  function setup() {
    createCanvas(720, 400);
   angleMode(DEGREES)
    noStroke();
  

  }
  
  function draw() {
    background(0);
    translate(200,200)
    rotate(-90)
    h = hour();
    m = minute();
    s = second();
    secAngle =map(s,0,60,0,360)
    hourAngle =map(h%12,0,12,0,360)
    minAngle =map(m,0,60,0,360)
    push();
    rotate(secAngle)
    stroke("skyblue")
    strokeWeight(10)
    line(0,0,100,0)
    pop();

    push();
    rotate(minAngle)
    stroke("lavender")
    strokeWeight(10)
    line(0,0,75,0)
    pop();

    push();
    rotate(hourAngle)
    stroke("pink")
    strokeWeight(10)
    line(0,0,50,0)
    pop();
stroke(255,0,255)
point(0,0)
strokeWeight(10)
noFill()
stroke("skyblue")
arc(0, 0, 300, 300, 0, secAngle);
stroke("lavender")
arc(0, 0, 280, 280, 0, minAngle);
stroke("pink")
arc(0, 0, 260, 260, 0, hourAngle);

    

  }
  