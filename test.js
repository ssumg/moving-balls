Ball[] ball = new Ball[10];

function setup(){
  size(600, 400);
  background(0);
  for(int i=0; i<10; i++)
    ball[i] = new Ball();
}

function draw(){

  background(0);
  for(int i=0; i<10; i++){
    ball[i].move();
    ball[i].display();
  }
}
public class Ball{
  float x, y;
  float xDir, yDir;
  
  Ball(){
    xDir = 1;
    yDir = 1;
    x = random(width);
    y = random(height);
  
    }
  function move(){
    x = x + xDir;
    y = y + yDir;
    
    if(x >= width-25 || x <= 25)
    xDir *= -1;
    if(y >= height-25 || y <= 25)
    yDir *= -1;
  }
  
  function display(){
    ellipseMode(CENTER); 
    noStroke();
    fill(y*x/2, x/2, x/y);
    ellipse(x, y, 50, 50);
    }
}
