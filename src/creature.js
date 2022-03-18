const Torso = require('./torso.js');
const Limbs = require('./limbs.js');
const Head = require('./head.js');
class Creature {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
    this.torso = new Torso(ctx, pos);
    this.limbs = new Limbs(ctx, this.torso);
    this.head = new Head(ctx, this.torso);

    this.isMoving = false;
    this.vel = this.randVelocity();
    
  }

  draw(sizeRatio = 1) {
    
    this.torso.draw(sizeRatio);
    this.limbs.draw(this.isMoving, this.torso, sizeRatio);
    this.head.draw(this.torso, sizeRatio);
  }

  moveTo(pos, deltaTime) {
    let moveX = pos[0] - this.pos[0] - this.torso.size[0]/2;
    let moveY = pos[1] - this.pos[1] - this.torso.size[1]/2;

    if (Math.abs(moveX) < 44 && Math.abs(moveY) < 44) {
      this.isMoving = false;
      return;
    }

    let magnitude = Math.sqrt(moveX * moveX + moveY * moveY);
    let unitVectorX = moveX / magnitude;
    let unitVectorY = moveY / magnitude;

    let xMove = (this.vel[0] * deltaTime * 0.3) * unitVectorX;
    let yMove = (this.vel[1] * deltaTime * 0.3) * unitVectorY;

    this.pos[0] += xMove;
    this.pos[1] += yMove;

    this.isMoving = true;
  }

  randVelocity() {
    let v = Math.random() * 80 + 22;
    return [v, v];
  }
  
}

module.exports = Creature;