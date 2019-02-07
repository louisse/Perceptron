
class PerceptronWidget extends Perceptron {
    constructor(inputCount) {
        super(inputCount);
        this.x = width / 8;
        this.y = height / 8;
        this.size = 30;
        this.isActivated = false;
    }

    feedForward(inputs) {
        let activate = super.feedForward(inputs);
        this.isActivated = activate === 1;
        return activate;
    }

    showDendrites(){
        push();
        translate(0, -this.size / 2);
        let dendrites = this.weights.concat(this.bias);
        let spacing = this.size / (dendrites.length - 1);
        let pointer = 0;
        let maxWeight = max(dendrites.map(abs));
        for (let dendrite of dendrites) {
            let dendriteClr = dendrite > 0 ? color(50, 255, 50) : color(255, 50, 50);
            let sWeight = map(abs(dendrite), 0, maxWeight, 1, 4);
            stroke(dendriteClr);
            strokeWeight(sWeight);
            line(0, pointer, -this.size, pointer);
            pointer += spacing;
        }
        pop();
    }

    showSynapse(){
        push();
        translate(this.size / 2, 0);
        let synapseClr = this.isActivated === true ? color(50, 255, 50) : color(255, 50, 50);
        stroke(synapseClr);
        strokeWeight(5);
        line(0, 0, this.size / 2, 0);
        pop();
    }

    show() {
        super.show();
        push();
        translate(this.x, height - this.y);
        this.showDendrites();
        this.showSynapse();
        stroke(255, 255, 50);
        strokeWeight(this.size);
        point(0, 0);
        pop();
    }
}
