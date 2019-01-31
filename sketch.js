let p;
let points = [];
let mSlider;
let bSlider;

function setup() {
    createCanvas(700, 700);
    p = new Perceptron(3);
    mSlider = createSlider(-1, 1, 1, 0.1);
    bSlider = createSlider(-1, 1, 0, 0.1);
    for (let i = 0; i < 100; i++) {
        points[i] = new Point();
    }
    frameRate(10);
}

function draw() {
    for (let pt of points) {
        pt.update();
        p.train([pt.x, pt.y, 1], pt.label);
    }
    background(51);
    drawLine();
    for (let pt of points) {
        pt.show();
    }
    p.show();
    points.push(new Point());
}

function mousePressed() {
    if (mouseX >= width || mouseY >= height) {
        points.push(new Point());
        return;
    }
    let mx = map(mouseX, 0, width, -1, 1);
    let my = map(mouseY, 0, height, 1, -1);
    points.push(new Point(mx, my));
}

function lineEquation(x) {
    //y = mx + b
    return (mSlider.value() * x) + bSlider.value();
}

function drawLine() {
    let y1 = lineEquation(-1);
    let y2 = lineEquation(1);
    y1 = map(y1, -1, 1, height, 0);
    y2 = map(y2, -1, 1, height, 0);
    stroke(255);
    strokeWeight(3);
    line(0, y1, width, y2);
}
