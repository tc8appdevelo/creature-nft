

class Ears {
  constructor(ctx, head) {
    this.ctx = ctx;
    this.head = head;
    this.color = this.randColor();
    this.shape = this.randShape();
    this.posOnHead= this.randPosOnHead();
    this.pos = this.randPos();

  }

  randShape() {
    if (Math.random() > 0.7) {
      return 'triangle'
    } else {
      return 'circle'
    }
  }

  draw(head) {
    if (this.shape === 'triangle') {
      // this.randTriangle();
      this.drawLeft(this.posOnHead)
    } else if (this.shape === 'circle') {
      this.drawLeftCircle(head);
    }
  }

  drawTriangleEars() {
    let ax = this.posOnHead.ax;
    let ay = this.posOnHead.ay;
    let bx = this.posOnHead.bx;
    let by = this.posOnHead.by;
    let cx = this.posOnHead.cx;
    let cy = this.posOnHead.cy;

    this.strokeStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo()
  }

  drawLeft(triangle) {
    this.strokeStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(triangle.ax, triangle.ay);
    this.ctx.lineTo(triangle.bx, triangle.by);
    this.ctx.lineTo(triangle.ax + triangle.base/2, triangle.ay - triangle.height);
    this.ctx.lineTo(triangle.ax, triangle.ay);
    // this.fillStyle = this.randColor();
    this.ctx.stroke();
    this.fillStyle = this.color;
    this.ctx.fill();
  }

  drawLeftCircle(head) {
    //this.ctx.arc(head.pos[0] + )
  }

  // drawRight() {
  //   this.ctx.beginPath();
  //   this.ctx.moveTo(ax + base/2, ay);
  //   this.ctx.lineTo(bx, by);
  //   this.ctx.lineTo(ax + base/2, ay - height);
  //   this.ctx.fill();
  // }

  // this.ctx.beginPath();
  // this.ctx.moveTo(ax, ay);
  // this.ctx.lineTo(bx, by);
  // this.ctx.lineTo(ax + base/2, ay - height);
  // this.ctx.fill();

  randPosOnHead() {
    let base = Math.random() * this.head.size[0];
    let height = Math.random() * (this.head.size[1] - 5) + 5;
    let ax = Math.random() * (this.head.size[0] - base);
    let ay = 0;
    let bx = base;
    let by = 0;
    let cx = Math.random() * base;
    let cy = -height;

    return {
      base: base,
      height: height,
      ax: ax,
      ay: ay,
      bx: bx,
      by: by,
      cx: cx,
      cy: cy,
    }
  }

  randTriangle() {
    let base = Math.random() * this.head.size[0]
    let height = Math.random() * (this.head.size[1] - 5) + 5;
    let ax = Math.random() * (this.head.size[0] - base) 
              + this.head.pos[0];
    let ay = this.head.pos[1];
    let bx = ax + base
    let by = this.head.pos[1];

    return {
      base: base,
      height: height,
      ax: ax,
      ay: ay,
      bx: bx,
      by: by,
    }
  }

  randCircle() {
    let x = Math.random() * this.head.size[0]
    let y = Math.random() * this.head.size[1]
    return [x, y]; 
  }

  randPos() {
    // let x = Math.random() * this.head.pos[0] + this.head.size[0] -
  }

  randColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
  }
}

module.exports = Ears;