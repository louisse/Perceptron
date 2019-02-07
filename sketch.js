let p;
let points = [];
let mSlider;
let bSlider;

function setup() {
    createCanvas(700, 700);
    p = new PerceptronWidget(2);
    mSlider = createSlider(-1, 1, 1, 0.01);
    bSlider = createSlider(-1, 1, 0, 0.01);
    for (let i = 0; i < 100; i++) {
        points[i] = new Point();
    }
}

function draw() {
    //update
    for (let pt of points) {
        p.train(pt.train_data, pt.label);
        pt.update();
    }
    points.push(new Point());
    //render
    background(30);
    drawLine();
    for (let pt of points) {
        pt.show();
    }
    p.show();
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
