class Point {
    constructor(x, y) {
        this.x = typeof x === 'undefined' ? random(-1, 1) : x;
        this.y = typeof y === 'undefined' ? random(-0.5, 0.5) : y;
        this.train_data = [this.x, this.y];
        this.label = this.y > lineEquation(this.x) ? 1 : -1;
        this.color = this.label === 1 ? 255 : 0;
    }

    show() {
        const px = map(this.x, -1, 1, 0, width);
        const py = map(this.y, -1, 1, height, 0);
        stroke(this.color);
        strokeWeight(12);
        point(px, py);
        const clr = p.feedForward(this.train_data) === 1 ? 255 : 0;
        stroke(clr);
        strokeWeight(9);
        point(px, py);
    }

    update() {
        this.label = this.y > lineEquation(this.x) ? 1 : -1;
        this.color = this.label === 1 ? 255 : 0;
    }
}
