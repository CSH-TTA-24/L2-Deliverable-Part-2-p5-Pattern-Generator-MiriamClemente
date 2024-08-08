let line1
let line2 
let line3 

function setup(){
  createCanvas(500, 500);
  background(0, 0, 0);

line1 = random(0,255);
line2 = random(0,255);
line3 = random(0,255);

}

function draw() {
  stroke(line1, line2, line3);
line(250, 250, mouseX, mouseY);
}

function mouseClicked() {
  background(0,0,0)
line1 = random(0,255);
line2 = random(0,255);
line3 = random(0,255);


}