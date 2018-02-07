
// 10 print design

let x = 0;
let y = 0;
spacing = 30;

function setup() {
  // put setup code here
  createCanvas(640, 480);
  background(0);
}

function draw() {
  // put drawing code here

  if (random(1) < 0.5) {
    stroke(255, 204, 0);
    line(x, y, x + spacing, y + spacing);
  } else {
    stroke(255);
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}