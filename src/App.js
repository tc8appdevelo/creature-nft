
import './App.css';
import React, { useEffect, useRef } from 'react';
import GameComp from './GameComp.js';
import GameMap from './map/game_map';

function App() {
  return (
    <div className='app'>
      <GameMap />
      <GameComp />
      
    </div>
  );
}

export default App;