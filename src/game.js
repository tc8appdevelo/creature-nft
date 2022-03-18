const Creature = require('./creature.js');

let clickMoveNeeded = false;
let newPosition = [0, 0];

class Game {
  constructor(canvas, ctx) {
    this.gameOver = false;
    this.canvas = canvas;
    this.ctx = ctx;
    //this.creature = new Creature(this.ctx, [111,111]);
  }

  start() {
    this.creature = new Creature(this.ctx, [222,222]);

    this.drawGame();

    // this.keydownListener = document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    // this.keyupListener = document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    

    this.clickListener = document.addEventListener('click', this.mouseDownHandler.bind(this), false);
    
    requestAnimationFrame(this.myUpdate.bind(this));
  }

  drawGame() {
    this.ctx.clearRect(0, 0, 888, 888);
    this.creature.draw();
  }

  myUpdate(time) {
    const deltaTime = (time - this.lastUpdateTime) / 100;
    this.lastUpdateTime = time;

    // this.creature.pos[0] += 0.2;
    // this.creature.pos[1] += 0.1;

    if (this.creature.isMoving && !clickMoveNeeded) {
      this.mouseClickMove(newPosition, deltaTime);
    }
    if (clickMoveNeeded) {
      clickMoveNeeded = false;
      this.creature.isMoving = true;
      this.mouseClickMove(newPosition, deltaTime)
    }
    this.drawGame();
    let animationID = requestAnimationFrame(this.myUpdate.bind(this));
    if (this.gameOver) {
      cancelAnimationFrame(animationID);
    }
  }

  mouseDownHandler(event) {
    let canvasBounds = this.canvas.getBoundingClientRect();
    let clickX = event.pageX - canvasBounds.left;
    let clickY = event.pageY - canvasBounds.top;
    let pos = [clickX, clickY];
    
    if (clickX < 0) {
      return;
    }

    clickMoveNeeded = true;
    newPosition = pos;
  }

  mouseClickMove(pos, dt) {
    this.creature.moveTo(pos, dt);
    this.drawGame();
  }

  // keyDownHandler(event) {
  //   if (event.keycode == 87) {
  //     this.creature.isMoving = true;
  //   }
  // }


  // collisionDetection() {
  //   if (this.creature.pos[0] >= this.canvas.width) {
  //     this.gameOver = true;
  //   }
  // }


}

module.exports = Game;