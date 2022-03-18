class Limbs {
  constructor(ctx, torso, isMoving) {
    this.ctx = ctx;
    this.color = this.randColor();
    this.torso = torso;

    this.length = this.randLength();
    this.width = this.randWidth();

    this.backPos = this.attachBackLimbs(torso);
    this.frontPos = this.attachFrontLimbs(torso);

    this.liftBackLegs = false;
  }

  draw(isMoving, torso, sizeRatio = 1) {
    let backPos = this.attachBackLimbs(torso, sizeRatio);
    let frontPos = this.attachFrontLimbs(torso, sizeRatio);
    this.ctx.fillStyle = this.color;
    if (isMoving) {
      if (Math.random() > 0.5) {
        this.ctx.fillRect(backPos[0], backPos[1],
          this.width / sizeRatio, (this.length / sizeRatio) * 0.8);
        this.ctx.fillRect(frontPos[0], frontPos[1],
          this.width / sizeRatio, this.length / sizeRatio);
        
      } else {
        this.ctx.fillRect(backPos[0], backPos[1],
          this.width / sizeRatio, this.length / sizeRatio);
        this.ctx.fillRect(frontPos[0], frontPos[1],
          this.width / sizeRatio, (this.length / sizeRatio) * 0.8);
        
      }
      
      

    } else if (!isMoving) {
      this.ctx.fillRect(backPos[0], backPos[1],
        this.width / sizeRatio, this.length / sizeRatio);
      this.ctx.fillRect(frontPos[0], frontPos[1],
        this.width / sizeRatio, this.length / sizeRatio);
    }
  }

  attachBackLimbs(torso, sizeRatio = 1) {
    let x = torso.pos[0] + (torso.size[0]/4)/sizeRatio - (this.width/2)/sizeRatio;
    let y = torso.pos[1] + torso.size[1]/sizeRatio;
    return [x, y];
  }
  attachFrontLimbs(torso, sizeRatio = 1) {
    let x = torso.pos[0] + torso.size[0]/sizeRatio - (torso.size[0]/4)/sizeRatio - (this.width/2)/sizeRatio;
    let y = torso.pos[1] + torso.size[1]/sizeRatio;
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