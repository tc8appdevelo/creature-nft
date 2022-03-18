class Eyes {
  constructor(ctx, head) {
    this.ctx = ctx;
    this.head = head;

    let maxRad = this.head.size[0] * 0.3;
    let minRad = 5;
    this.radius = Math.random() * maxRad + 5
    this.pos = this.setPosition();
    this.pupilColor = this.randColor();
    this.pupilSize = Math.random() * (this.radius/2 - this.radius/3) + this.radius/3;
  }

  setPosition() {
    // let x = Math.random() * (this.head.size[0] - this.radius) + this.radius;
    // let y = Math.random() * (this.head.size[1] - this.radius) + this.radius;
    let x = Math.random() * this.head.size[0]
    let y = Math.random() * this.head.size[1]/2
    return [x, y];
  }

  draw(headPos, sizeRatio = 1) {
    this.ctx.fillStyle = 'white';
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0]/sizeRatio + headPos[0], this.pos[1]/sizeRatio + headPos[1], this.radius/sizeRatio, 0, 2*Math.PI);
    this.ctx.fill();
    this.ctx.fillStyle = this.pupilColor;
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0]/sizeRatio + headPos[0], this.pos[1]/sizeRatio + headPos[1], this.pupilSize/sizeRatio, 0, 2*Math.PI);
    this.ctx.fill();
  }

  randColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
  }
}

module.exports = Eyes;