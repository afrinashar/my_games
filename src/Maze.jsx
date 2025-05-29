import React, { useState, useEffect } from 'react';
import './MazeGame.css';

const generateRandomMaze = (rows, cols, complexity = 0.3) => {
  const maze = Array.from({ length: rows }, () => Array(cols).fill('0'));
  // Randomly place obstacles based on complexity
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (Math.random() < complexity && (i !== 0 || j !== 0) && (i !== rows - 1 || j !== cols - 1)) {
        maze[i][j] = '1';
      }
    }
  }
  maze[0][0] = 'S'; // Start
  maze[rows - 1][cols - 1] = 'E'; // End
  return maze;
};

const MazeGame = () => {
  const [maze, setMaze] = useState(generateRandomMaze(10, 10)); // Default to a 10x10 maze
  const [position, setPosition] = useState([0, 0]);
  const [timer, setTimer] = useState(0); // Timer state
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState(0.3); // Default to "medium" difficulty
  const [isHintVisible, setIsHintVisible] = useState(false); // Show hint state

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameOver]);

  const handleMove = (dx, dy) => {
    const [x, y] = position;
    if (maze[x + dx] && maze[x + dx][y + dy] !== '1') {
      setPosition([x + dx, y + dy]);
    }
  };

  const resetGame = () => {
    setMaze(generateRandomMaze(10, 10, difficulty));
    setPosition([0, 0]);
    setTimer(0);
    setGameOver(false);
    setIsHintVisible(false);
  };

  const showHint = () => {
    setIsHintVisible(true);
    // You can implement a pathfinding algorithm like A* or DFS to highlight the correct path
  };

  const changeDifficulty = (level) => {
    const complexities = {
      easy: 0.1,
      medium: 0.3,
      hard: 0.5,
    };
    setDifficulty(complexities[level]);
    resetGame(); // Reset with new difficulty
  };

  const isAtEnd = maze[position[0]][position[1]] === 'E';

  useEffect(() => {
    if (isAtEnd) {
      setGameOver(true);
      alert(`You win! Time: ${timer} seconds`);
    }
  }, [position, isAtEnd, timer]);

  return (
    <div className="maze-game">
       <div className="maze-grid">
        {maze.map((row, rowIndex) => (
          <div key={rowIndex} className="maze-row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`maze-cell ${position[0] === rowIndex && position[1] === colIndex ? 'player' : ''} ${cell}`}
              >
                {isHintVisible && cell === 'S' && <span className="hint">Start</span>}
                {isHintVisible && cell === 'E' && <span className="hint">Exit</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="status">
        <p className="status-message">Time: {timer}s</p>
        {isAtEnd ? (
          <div>
            <h3 className="win-message">You Win!</h3>
            <button onClick={resetGame} className="control-button">Play Again</button>
          </div>
        ) : (
          <p className="status-message">Find the exit!</p>
        )}
      </div>
      <div className="controls">
        <button onClick={() => handleMove(-1, 0)} className="control-button">Up</button>
        <button onClick={() => handleMove(1, 0)} className="control-button">Down</button>
        <button onClick={() => handleMove(0, -1)} className="control-button">Left</button>
        <button onClick={() => handleMove(0, 1)} className="control-button">Right</button>
      </div>
      <div className="options">
        <button onClick={() => showHint()} className="control-button">Show Hint</button>
        <div className="difficulty-buttons">
          <button onClick={() => changeDifficulty('easy')} className="control-button">Easy</button>
          <button onClick={() => changeDifficulty('medium')} className="control-button">Medium</button>
          <button onClick={() => changeDifficulty('hard')} className="control-button">Hard</button>
        </div>
      </div>
    </div>
  );
};

export default MazeGame;
