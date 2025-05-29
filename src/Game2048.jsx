import React, { useState } from 'react';

const getRandomTile = () => Math.random() < 0.9 ? 2 : 4;

const initializeGrid = () => {
  let grid = Array(4).fill(null).map(() => Array(4).fill(null));
  grid[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)] = getRandomTile();
  return grid;
};

const Game2048 = () => {
  const [grid, setGrid] = useState(initializeGrid());

  const moveLeft = () => {
    let newGrid = grid.map(row => {
      let newRow = row.filter(cell => cell !== null);
      while (newRow.length < 4) newRow.push(null);
      return newRow;
    });
    setGrid(newGrid);
  };

  // Add more movement logic for up, down, right

  return (
    <div className="game-2048">
      <button onClick={moveLeft}>Left</button>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Game2048;
