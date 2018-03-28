Ball[] ball = new Ball[10];

void setup(){
  size(600, 400);
  background(0);
  for(int i=0; i<10; i++)
    ball[i] = new Ball();
}

void draw(){

  background(0);
  for(int i=0; i<10; i++){
    ball[i].move();
    ball[i].display();
  }
}