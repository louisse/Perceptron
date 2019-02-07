class Perceptron {
    constructor(inputCount) {
        this.weights = [];
        for (let i = 0; i < inputCount; i++) {
            this.weights[i] = random(-1, 1);
        }
        this.bias = random(-1, 1);
        this.lr = 0.0001;
    }

    feedForward(inputs) {
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        sum += this.bias;
        return Perceptron.activateSign(sum);
    }

    train(inputs, output) {
        const guess = this.feedForward(inputs);
        const error = output - guess;
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.lr;
        }
        this.bias += error * this.lr;
    }

    show() {
        let x1 = -1;
        let x2 = 1;
        let y1 = (-(this.weights[0] * x1) - this.bias) / this.weights[1];
        let y2 = (-(this.weights[0] * x2) - this.bias) / this.weights[1];
        x1 = 0;
        x2 = width;
        y1 = map(y1, -1, 1, height, 0);
        y2 = map(y2, -1, 1, height, 0);
        stroke(0, 200, 200);
        strokeWeight(3);
        line(x1, y1, x2, y2);
    }

    static activateSign(num) {
        if (num > 0) {
            return 1;
        }
        return -1;
    }

    static activateSigmoid(num) {
        return num;
    }
}
