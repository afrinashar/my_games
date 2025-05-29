import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Battleship.css'; // Custom CSS for board responsiveness

// Function to generate a 5x5 board filled with 'O'
const generateBoard = () => Array(5).fill(null).map(() => Array(5).fill('O'));

// Function to randomly place ships on the board
const placeShips = (board) => {
  const newBoard = board.map(row => [...row]);
  const ships = [2, 3]; // Ship sizes
  ships.forEach(size => {
    let placed = false;
    while (!placed) {
      const isHorizontal = Math.random() > 0.5;
      const row = Math.floor(Math.random() * 5);
      const col = Math.floor(Math.random() * 5);
      if (isHorizontal) {
        if (col + size <= 5 && newBoard[row].slice(col, col + size).every(cell => cell === 'O')) {
          newBoard[row].fill('S', col, col + size);
          placed = true;
        }
      } else {
        if (row + size <= 5 && newBoard.slice(row, row + size).every(r => r[col] === 'O')) {
          for (let i = 0; i < size; i++) {
            newBoard[row + i][col] = 'S';
          }
          placed = true;
        }
      }
    }
  });
  return newBoard;
};

const Battleship = () => {
  const [playerBoard, setPlayerBoard] = useState(generateBoard()); // Player board state
  const [hitCount, setHitCount] = useState(0); // Hit counter state
  const [shipsSunk, setShipsSunk] = useState(0); // Ships sunk counter
  const [gameOver, setGameOver] = useState(false); // Game over state

  useEffect(() => {
    setPlayerBoard(placeShips(generateBoard()));
  }, []);

  // Handle an attack on the board (when a button is clicked)
  const handleAttack = (row, col) => {
    if (gameOver) return; // Prevent attacks if game is over

    const newBoard = playerBoard.map((r, rIndex) =>
      r.map((cell, cIndex) => 
        rIndex === row && cIndex === col ? (cell === 'O' ? 'X' : cell) : cell
      )
    );
    setPlayerBoard(newBoard);

    if (playerBoard[row][col] === 'S') {
      setHitCount(hitCount + 1);
      const allShipsSunk = !newBoard.flat().includes('S');
      if (allShipsSunk) {
        setGameOver(true);
        setShipsSunk(shipsSunk + 1);
      }
    }
  };

  const restartGame = () => {
    setPlayerBoard(placeShips(generateBoard()));
    setHitCount(0);
    setShipsSunk(0);
    setGameOver(false);
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Battleship Game</h2>

      {/* Game board */}
      <div className="row justify-content-center">
        {playerBoard.map((row, rowIndex) => (
          <div className="row mb-2 justify-content-center" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div className="col-auto" key={colIndex}>
                <button
                  className={`btn btn-${cell === 'X' ? 'danger' : 'primary'} p-3 board-btn`}
                  onClick={() => handleAttack(rowIndex, colIndex)}
                >
                  {cell}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Hit counter and game status */}
      <h4 className="mt-4">Hits: {hitCount}</h4>
      {gameOver && <h4 className="mt-4 text-success">Congratulations! All ships sunk!</h4>}

      {/* Restart button */}
      {gameOver && (
        <button className="btn btn-lg btn-warning mt-4" onClick={restartGame}>
          Restart Game
        </button>
      )}
    </div>
  );
};

export default Battleship;
