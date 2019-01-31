class Point {
    constructor(x, y) {
        this.x = typeof x === 'undefined' ? random(-1, 1) : x;
        this.y = typeof y === 'undefined' ? random(-0.5, 0.5) : y;
        this.label = this.y > lineEquation(this.x) ? 1 : -1;
        this.color = this.label === 1 ? 255 : 0;
    }

    show() {
        let px = map(this.x, -1, 1, 0, width);
        let py = map(this.y, -1, 1, height, 0);
        stroke(this.color);
        strokeWeight(12);
        point(px, py);
        let clr = 0;
        if (p.guess([this.x, this.y, 1]) === 1) {
            clr = 255;
        }
        stroke(clr);
        strokeWeight(9);
        point(px, py);
    }

    update() {
        this.label = this.y > lineEquation(this.x) ? 1 : -1;
        this.color = this.label === 1 ? 255 : 0;
    }
}
