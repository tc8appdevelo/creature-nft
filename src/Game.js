import React, { useEffect, useRef } from 'react';
const Creature = require('./creature.js');
const Practice = require('./practice.js');

function Game() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    let pos = [100, 100];
    let creature = new Creature(ctx, pos);
    
    creature.draw();
  }, []);

  return <canvas id="canvas" ref={canvasRef} />
}

export default Game;