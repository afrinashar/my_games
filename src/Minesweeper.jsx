import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Minesweeper.css'; // Custom CSS for animations and styling

// Utility function to generate the board with mines
const generateBoard = (rows, cols, mines) => {
  const board = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill({ value: 0, revealed: false, flagged: false }));

  // Randomly place mines
  let mineCount = 0;
  while (mineCount < mines) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    if (board[row][col].value !== 'M') {
      board[row][col] = { ...board[row][col], value: 'M' };
      mineCount++;
    }
  }

  // Set up numbers for adjacent mines
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c].value !== 'M') {
        let mineCount = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (board[r + i] && board[r + i][c + j]?.value === 'M') {
              mineCount++;
            }
          }
        }
        board[r][c].value = mineCount;
      }
    }
  }

  return board;
};

const Minesweeper = () => {
  const [board, setBoard] = useState(generateBoard(10, 10, 15));
  const [gameOver, setGameOver] = useState(false);
  const [flags, setFlags] = useState(15);
  const [revealedCells, setRevealedCells] = useState(0);

  const handleClick = (row, col) => {
    if (gameOver || board[row][col].flagged || board[row][col].revealed) return;

    const newBoard = [...board];
    if (newBoard[row][col].value === 'M') {
      setGameOver(true);
      alert("Game Over! You hit a mine.");
      return;
    }

    const revealCell = (r, c) => {
      if (newBoard[r] && newBoard[r][c] && !newBoard[r][c].revealed && !newBoard[r][c].flagged) {
        newBoard[r][c].revealed = true;
        setRevealedCells((prev) => prev + 1);
        if (newBoard[r][c].value === 0) {
          // Automatically reveal surrounding cells if 0
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              revealCell(r + i, c + j);
            }
          }
        }
      }
    };

    revealCell(row, col);
    setBoard(newBoard);

    // Check win condition
    if (revealedCells + 1 === 100 - 15) {
      alert("Congratulations! You won.");
      setGameOver(true);
    }
  };

  const handleRightClick = (e, row, col) => {
    e.preventDefault();
    if (gameOver || board[row][col].revealed) return;

    const newBoard = [...board];
    if (newBoard[row][col].flagged) {
      newBoard[row][col].flagged = false;
      setFlags((prev) => prev + 1);
    } else if (flags > 0) {
      newBoard[row][col].flagged = true;
      setFlags((prev) => prev - 1);
    }

    setBoard(newBoard);
  };

  const restartGame = () => {
    setBoard(generateBoard(10, 10, 15));
    setGameOver(false);
    setFlags(15);
    setRevealedCells(0);
  };

  return (
    <div className="minesweeper-container text-center mt-4">
      <h2 className="text-primary"> {gameOver ? 'Game Over!' : `Flags Remaining: ${flags}`}</h2>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <button
                key={colIndex}
                className={`cell ${cell.revealed ? 'revealed' : ''} ${cell.flagged ? 'flagged' : ''}`}
                onClick={() => handleClick(rowIndex, colIndex)}
                onContextMenu={(e) => handleRightClick(e, rowIndex, colIndex)}
              >
                {cell.revealed && (cell.value === 'M' ? '💣' : cell.value > 0 ? cell.value : '')}
              </button>
            ))}
          </div>
        ))}
      </div>
     <div> <button className="btn mt-4" onClick={restartGame}>Restart Game</button>
   </div> </div>
  );
};

export default Minesweeper;
