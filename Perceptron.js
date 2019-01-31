class Perceptron {
    constructor(inputCount) {
        this.weights = [];
        for (let i = 0; i < inputCount; i++) {
            this.weights[i] = random(-1, 1);
        }
        this.lr = 0.01;
    }

    guess(inputs) {
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return sign(sum);
    }

    train(point, label) {
        let g = this.guess(point);
        let error = label - g;
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * point[i] * this.lr;
        }
    }

    show() {
        let y1 = this.guessY(-1);
        let y2 = this.guessY(1);
        y1 = map(y1, -1, 1, height, 0);
        y2 = map(y2, -1, 1, height, 0);
        stroke(0, 0, 200);
        strokeWeight(3);
        line(0, y1, width, y2);
    }

    guessY(x) {
        let m = this.weights[0] / this.weights[1];
        let b = this.weights[2] / this.weights[1];
        return -(m * x) - b;
    }
}


function sign(num) {
    if (num > 0) {
        return 1;
    }
    return -1;
}
