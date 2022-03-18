import React, { useEffect, useRef } from 'react';
import GameMap from './map/game_map.jsx';

const Game = require('./game.js')

function GameComp() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    const game = new Game(canvas, ctx);
    game.start();
  }, []);

  return (
    <div>
      {/* <GameMap /> */}
      <canvas id="canvas" ref={canvasRef} />
    </div>

  )
}

export default GameComp;