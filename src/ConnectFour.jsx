import React, { useState } from 'react';
import red from "../src/assets/red.png";
import yellow from "../src/assets/yellow.png";
import './ConnectFour.css'; // Import custom CSS for styling

const ConnectFour = () => {
  const [board, setBoard] = useState([...Array(6)].map(() => Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('red');
  const [winner, setWinner] = useState(null);

  // Function to check if the current player wins
  const checkWinner = (board, row, col, player) => {
    const directions = [
      { dr: 0, dc: 1 },   // Horizontal
      { dr: 1, dc: 0 },   // Vertical
      { dr: 1, dc: 1 },   // Diagonal (top-left to bottom-right)
      { dr: 1, dc: -1 },  // Diagonal (bottom-left to top-right)
    ];

    const isValid = (r, c) => r >= 0 && r < 6 && c >= 0 && c < 7;

    for (const { dr, dc } of directions) {
      let count = 1;

      for (let i = 1; i < 4; i++) {
        const r = row + dr * i;
        const c = col + dc * i;
        if (isValid(r, c) && board[r][c] === player) {
          count++;
        } else {
          break;
        }
      }

      for (let i = 1; i < 4; i++) {
        const r = row - dr * i;
        const c = col - dc * i;
        if (isValid(r, c) && board[r][c] === player) {
          count++;
        } else {
          break;
        }
      }

      if (count >= 4) {
        return true;
      }
    }

    return false;
  };

  const handleDrop = (colIndex) => {
    if (winner) return;

    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
      if (!board[rowIndex][colIndex]) {
        const newBoard = [...board].map(row => [...row]);
        newBoard[rowIndex][colIndex] = currentPlayer;

        setBoard(newBoard);

        if (checkWinner(newBoard, rowIndex, colIndex, currentPlayer)) {
          setWinner(currentPlayer);
        } else {
          setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red');
        }

        break;
      }
    }
  };

  const resetGame = () => {
    setBoard([...Array(6)].map(() => Array(7).fill(null)));
    setCurrentPlayer('red');
    setWinner(null);
  };

  return (
    <div className="connect-four-container">
      {winner ? (
        <div className="connect-four-winner">
          Player {winner} Wins!
          <button onClick={resetGame} className="connect-four-reset-button">Play Again</button>
        </div>
      ) : (
        <p className="connect-four-turn">Player {currentPlayer}'s Turn</p>
      )}

      <div className="connect-four-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="connect-four-row">
            {row.map((cell, colIndex) => (
              <button
                key={colIndex}
                className="connect-four-cell"
                onClick={() => handleDrop(colIndex)}
              >
                {cell ? (
                  <img
                    className="connect-four-img"
                    src={cell === 'red' ? red : yellow}
                    alt={cell}
                  />
                ) : (
                  '⚪'
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectFour;
