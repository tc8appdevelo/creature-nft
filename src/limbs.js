class Limbs {
  constructor(ctx, torso) {
    this.ctx = ctx;
    this.color = this.randColor();
    this.torso = torso;

    this.length = this.randLength();
    this.width = this.randWidth(this.length);

    this.backPos = this.attachBackLimbs(torso);
    this.frontPos = this.attachFrontLimbs(torso);
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.backPos[0], this.backPos[1],
                      this.width, this.length);
    this.ctx.fillRect(this.frontPos[0], this.frontPos[1],
                      this.width, this.length);
    
  }

  attachBackLimbs(torso) {
    let x = torso.pos[0] + torso.size[0]/4 - this.width/2;
    let y = torso.pos[1] + torso.size[1];
    return [x, y];
  }
  attachFrontLimbs(torso) {
    let x = torso.pos[0] + torso.size[0] - torso.size[0]/4 - this.width/2;
    let y = torso.pos[1] + torso.size[1];
    return [x, y];
  }

  randLength() {
    return Math.random() * 100 + 5;
  }

  randWidth() {
    let max = (this.torso.size[0]/2) - (this.torso.size[0]/10) - 5;
    return Math.random() * max + 5;
  }

  randColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
  }
}

module.exports = Limbs;