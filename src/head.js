class Head {
  constructor(ctx, torso) {
    this.ctx = ctx;
    this.torso = torso;
    this.color = this.randColor();
    this.size = this.randRectSize();
    

    this.isTop() ? this.pos = this.topRandPos() : this.pos = this.sideRandPos()
    
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.pos[0], this.pos[1],
                      this.size[0], this.size[1]);
    this.drawEyes();
  }

  topRandPos() {
    let max = this.torso.pos[0] + this.torso.size[0] - this.size[0]/2
    let min = this.torso.pos[0] - this.size[0]/2
    
    let x = Math.random() * (max - min) + min;
    let y = this.torso.pos[1] - this.size[1];
    return [x, y];
  }

  sideRandPos() {
    let max = this.torso.pos[1] + this.torso.size[1]/2
    let min = this.torso.pos[1]
    let x = this.torso.pos[0] + this.torso.size[0];
    let y = Math.random() * (max - min) + min;
    return [x, y];
  }

  isTop() {
    if (Math.random() > 0.6) {
      return true;
    } else {
      return false;
    }
  }

  randRectSize() {
    let x = Math.random() * 200 + 22;
    let y = Math.random() * 200 + 22;
    let size = [x, y];
    return size;
  }

  drawEyes() {
    // let isCircle;
    // if (Math.random() > 0.8) {
    //   isCircle = true;
    // } else {
    //   isCircle = false;
    // }

    let isCircle = true;

    if (isCircle) {
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
    }
  }

  randColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
  }
}

module.exports = Head;