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
  }

  draw() {
    this.torso.draw();
    this.limbs.draw();
    this.head.draw();
  }

  
}

module.exports = Creature;