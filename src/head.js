const Eyes = require('./eyes.js');
const Ears = require('./ears.js');
const Snout = require('./snout.js');

class Head {
  constructor(ctx, torso) {
    this.ctx = ctx;
    this.torso = torso;
    this.color = this.randColor();
    this.size = this.randRectSize(this.torso);
    this.isTop() ? this.pos = this.topRandPos() : this.pos = this.sideRandPos()
    Math.random() > 0.9 ? this.snout = new Snout(ctx, this) : this.snout = false;
    this.ears = new Ears(ctx, this);
    this.eyes = new Eyes(ctx, this);
    
  }

  draw(torso, sizeRatio = 1) {

    this.ctx.fillStyle = this.color;
    let x = this.pos[0]/sizeRatio + this.torso.pos[0]
    let y = this.pos[1]/sizeRatio + this.torso.pos[1]
    this.ctx.fillRect(this.pos[0]/sizeRatio + this.torso.pos[0], this.torso.pos[1] + this.pos[1]/sizeRatio, this.size[0]/sizeRatio, this.size[1]/sizeRatio);
    // if (this.snout) {
    //   this.snout.draw();
    // }
    //this.ears.draw();
    this.eyes.draw([x, y], sizeRatio);
    //this.drawEyes();
    
  }

  topRandPos() {

    let max = this.torso.size[0] - this.size[0]/2
    let min = 0
    let x = Math.random() * max;
    let y = -this.size[1];
    return [x, y];
  }

  sideRandPos() {
    let max = this.torso.size[1]/2

    let x = this.torso.size[0];
    let y = Math.random() * max
    return [x, y];
  }

  isTop() {
    if (Math.random() > 0.6) {
      return true;
    } else {
      return false;
    }
  }

  randRectSize(torso) {
    let x;
    let y;
    let size;
    if (Math.random() > 0.9) {
      x = Math.random() * (torso.size[0] - torso.size[0]/2) + torso.size[0]/2
      y = Math.random() * (torso.size[1] - torso.size[1]/2) + torso.size[1]/2
      size = [x, y];
    } else {
      x = Math.random() * (torso.size[0]/1.5 - torso.size[0]/3) + torso.size[0]/3;
      y = Math.random() * (torso.size[1]/1.5 - torso.size[1]/3) + torso.size[1]/3;
      size = [x, y];
    }
    return size;
  }

  positionEyes() {

  }

  drawEyes() {
    let isCircle = true;

    // if (isCircle) {
      let maxRad = this.size[0] * 0.4;
      let minRad = 5;
      let radius = Math.random() * (maxRad - minRad) + minRad;
      let x = Math.random() * (this.size[0] - radius/2) + this.pos[0];
      let y = Math.random() * (this.size[1] - radius/2) + this.pos[1];

      this.ctx.fillStyle = 'white';
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, 2*Math.PI);
      this.ctx.fill();

      let pupilColor = this.randColor();
      let pupilSize = Math.random() * (radius - 5) + 5;
      this.ctx.fillStyle = pupilColor;
      this.ctx.beginPath();
      this.ctx.arc(x, y, pupilSize, 0, 2*Math.PI);
      this.ctx.fill();
    // }
  }

  randColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
  }
}

module.exports = Head;