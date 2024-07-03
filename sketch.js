let k = 2;
let minSize = 2; // Minimum size of the box
let maxSize = 300; // Maximum size of the box

function setup() { 
    createCanvas(800, 800, WEBGL);
    stroke('white');
    noStroke;
    rectMode(CENTER);
    frameRate(30); // Lower frame rate for better performance
} 

function draw() { 
    background("#988E5F");

    for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
            push();
            translate(250 * j, 250 * i, -250 * k);
            generateSquares(i, j, k);
            pop();
        }
    }
}

function generateSquares(i, j, k) {
    let n = noise(j * 0.2 + frameCount * 0.001, i * 0.2 + frameCount * 0.001, k * 0.2);
    let cubeSize = map(n, 0, 1, minSize, maxSize);

    let num = 8; // Reduced number of cubes for better performance
    let sp = cubeSize / (num - 1);

    let rx = 0.68 * frameCount * 0.01;
    let ry = 0.68 * frameCount * 0.01;

    rotateX(-rx);
    rotateY(ry);

    for (let z = 0; z < num; z++) {
        for (let y = 0; y < num; y++) {
            for (let x = 0; x < num; x++) {
                push();
                translate(-cubeSize / 2 + x * sp, -cubeSize / 2 + y * sp, -cubeSize / 2 + z * sp);
                ellipse(0, 0, 3, 3);
                // point(0, 0, 0);
                pop();
            }
        }
    }
}
