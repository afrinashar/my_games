import React, { useState } from 'react';
import './Sudoku.css'; // Import the CSS file for styling

const initialBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const Sudoku = () => {
  const [board, setBoard] = useState(initialBoard);

  const handleChange = (row, col, value) => {
    let newBoard = [...board];
    newBoard[row][col] = value ? parseInt(value) : 0;
    setBoard(newBoard);
  };

  const getCellClass = (row, col) => {
    const isHighlighted = (row % 3 === 0 || col % 3 === 0) ? 'highlight' : '';
    return `sudoku-cell ${isHighlighted}`;
  };

  return (
    <div className="sudoku-container">
      <h2 className="sudoku-title">Sudoku Game</h2>
      <div className="sudoku-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="number"
                value={cell !== 0 ? cell : ''}
                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                min="1"
                max="9"
                className={getCellClass(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sudoku;
