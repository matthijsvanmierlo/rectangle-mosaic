// Store the squares drawon on the window
let squares = [];

function setup() {
  // Create a Canvas
  createCanvas(window.innerWidth,window.innerHeight);
  // Set the background
  background(255);
  // Push the first square onto the array
  squares.push(createSquare());
  // Create 2000 squares to push on the array
  for(let i = 0; i < 2000; i++){
    // Assume the new rectangle intersects with at least one
    acceptable = false;
    // While the rectangle still intersects at least on rectangle...
    // Keep making a new rectangle until it is clear
    while(acceptable == false){
     newSquare = createSquare();
     numCollisions = 0;
     for(let j = 0; j <= i; j++){
       if(newSquare.didCollideWith(squares[j])){
         numCollisions += 1;
       }
     }
     // If the rectangle doesn't collide with anything else...
     // Exit the loop, push the rect onto the array, and continue loop...
     if(numCollisions == 0){
      acceptable = true; 
      squares.push(newSquare);
     }
    }
  }
  // Draw each rectangle using its own method
  for(let square of squares){
    square.drawMe();
  }
}

// Function that returns rectangle object
// Contains x, y, sizeX, sizeY, r, g, b (color), 
// drawMe() and didCollideWith()
function createSquare(){
  return {
    x : random(width),
    y : random(height),
    sizeX : random(200),
    sizeY : random(200),
    r : random(255),
    g : random(255),
    b : random(255),
    drawMe(){
     fill(this.r, this.g, this.b);
     rect(this.x, this.y, this.sizeX, this.sizeY);
    },
    didCollideWith(rect2){
     // Checking for gaps between any of the 4 sides
     // Any gap means a collision does not exist
     // http://devmag.org.za/2009/04/13/basic-collision-detection-in-2d-part-1/
     if (this.x < rect2.x + rect2.sizeX &&
         this.x + this.sizeX > rect2.x &&
         this.y < rect2.y + rect2.sizeY &&
         this.y + this.sizeY > rect2.y) {
          return true;
        }else{
          return false; 
        }
    }
  }
}


function draw() {
  noLoop();
}
