

class Torso {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
    this.color = this.randColor();
    this.shape = 'square';
    this.size = this.randRect();
     
  }

  evolve() {

  }

  draw(sizeRatio = 1) {
    this.ctx.fillStyle = this.color;
    if (this.shape === 'square') {
      this.ctx.fillRect(this.pos[0], this.pos[1], this.size[0]/sizeRatio, this.size[1]/sizeRatio)
    } else if (this.shape === 'circle') {
      let radius = this.randCircle();
      this.ctx.beginPath();
      this.ctx.arc(this.pos[0], this.pos[1], radius, 0, 2*Math.PI);
      this.ctx.fill();
    }
  }

  randShape() {
    if (Math.random() > 0.5) {
      return 'circle';
    } else {
      return 'square';
    }
  }

  randColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
  }

  randCircle() {
    return Math.random() * 100 + 10;
  }

  randRect() {
    let x = Math.random() * 200 + 22;
    let y = Math.random() * 200 + 22;
    let size = [x, y];
    return size;
  }

}

module.exports = Torso;