let bubbles = [];

function setup() {
    createCanvas(600, 600);
    frameRate(10);

}

function draw() {
    background(237, 249, 250);
    if (mouseIsPressed) {
        bubbles.push(new Bubble(mouseX, mouseY));
    }

    for (let i = bubbles.length - 1; i >= 0; i--) {
        bubbles[i].display();

        if (bubbles[i].x < 0 || bubbles[i].x > width || bubbles[i].y < 0 || bubbles[i].y > height) {
            bubbles.splice(i, 1);
        }
    }
}

class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.speedX = random(-5, 5);
        this.speedY = random(-10, 10);

    }

    display() {
        
        noStroke();
        fill(random(33, 230), random(230, 255), random(220, 255), 128);
        ellipse(this.x, this.y, random(20, 50));

        this.x += this.speedX;
        this.y += this.speedY;        
    }

}

    
   