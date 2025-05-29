// src/App.js
import React, { useState, useEffect } from 'react';
 ;

const SneaksAndLaders = () => {
  const [position, setPosition] = useState(1);

  const handleRollDice = () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    const newPosition = position + diceValue;

    // Define snakes and ladders
    const snakesAndLadders = {
      16: 6,
      47: 26,
      49: 11,
      56: 53,
      62: 19,
      64: 60,
      87: 24,
      93: 73,
      95: 75,
      98: 78
    };

    // Check if there's a snake or ladder at the new position
    const newPositionWithSnakeOrLadder = snakesAndLadders[newPosition] || newPosition;

    setPosition(newPositionWithSnakeOrLadder > 100 ? position : newPositionWithSnakeOrLadder);
  };

  useEffect(() => {
    if (position === 100) {
      alert('Congratulations! You won!');
    }
  }, [position]);

  return (
    <div className="App">
      <h1>Snake and Ladder Game</h1>
      <div className="board">
        {Array.from({ length: 100 }, (_, index) => (
          <div key={index} className={`cell ${position === index + 1 ? 'player' : ''}`}>
            {index + 1}
          </div>
        ))}
      </div>
      <button onClick={handleRollDice}>Roll Dice</button>
    </div>
  );
};

export default SneaksAndLaders;
