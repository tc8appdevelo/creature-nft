class Snout {
  constructor(ctx, head) {
    this.ctx = ctx;
    this.head = head;
    this.size = this.randSize();
    this.pos = this.randPos();
  }

  draw() {
    this.ctx.fillStyle = this.head.color;
    this.ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    // this.ctx.fillStyle = '#000000';
    // let radius = Math.random() * this.size[0]/5;
    // let nx = Math.random() * ((this.pos[0] + this.size[0]) - this.pos[0]) + this.pos[0];
    // let ny = Math.random() * ((this.pos[1] + this.size[1]) - this.pos[1]) + this.pos[1];

    // this.ctx.arc(nx, ny, radius, 0, Math.random() * (Math.PI * 2 - Math.PI/2) + Math.PI/2);
    // this.ctx.fill();
  }

  randPos() {
    let x = this.head.pos[0] + this.head.size[0];
    let y = this.head.pos[1] + this.head.size[1] - this.size[1];
    return [x, y];
  }

  randSize() {
    if (Math.random() > 0.8) {
      if (Math.random() > 0.8) {
        let x = Math.random() * (this.head.torso.size[0] - 70) + 70;
        let y = Math.random() * (x/2 - 34) + 34;
        return [x, y];
      } else {
        let x = Math.random() * (this.head.size[0] - 30) + 30;
        let y = Math.random() * (this.head.size[1] - 30) + 30;
        return [x, y]; 
      }
    } else {
      let x = Math.random() * ((this.head.size[0]/2) - 30) + 30;
      let y = Math.random() * ((this.head.size[1]/2) - 30) + 30;
      return [x, y]; 
    }
  }
}

module.exports = Snout;