import React, { useState } from 'react';
import './Cards.css'; // Import your CSS file for styling

const SudokuCell = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value === '' ? null : parseInt(e.target.value, 10));
  };

  return (
    <input
      type="number"
      min="1"
      max="9"
      className="sudoku-cell"
      value={value || ''}
      onChange={handleChange}
    />
  );
};

const SudokuGrid = () => {
  const [grid, setGrid] = useState([
    [null, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8]
  ]);

  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <SudokuCell
              key={colIndex}
              value={cell}
              onChange={value => handleCellChange(rowIndex, colIndex, value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const MainApp = () => {
  return (
    <div className="sudoku-game">
      <h1>Sudoku Game</h1>
      <SudokuGrid />
    </div>
  );
};

export default MainApp;
