import React, { useState, useEffect } from 'react';
import basket from "../src/assets/basket.png";
import apple from "../src/assets/apple.png";
import newton from "../src/assets/newton.png";
import './CatchGame.css'; // Import custom CSS

const CatchGame = () => {
  const [position, setPosition] = useState(50); // Player's position
  const [objectPosition, setObjectPosition] = useState({ x: Math.random() * 100, y: 0 }); // Falling object's position
  const [score, setScore] = useState(0); // Player's score
  const [misses, setMisses] = useState(0); // Count of missed objects
  const [gameOver, setGameOver] = useState(false);

  // Move the falling object down at intervals
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setObjectPosition((prev) => {
        if (prev.y >= 100) {
          // Object missed, reset it to top and increment missed count
          setMisses(misses + 1);
          if (misses >= 2) {
            setGameOver(true);
            clearInterval(interval);
          }
          return { x: Math.random() * 100, y: 0 };
        }
        return { x: prev.x, y: prev.y + 1 };
      });
    }, 50); // Object falls every 50ms

    return () => clearInterval(interval);
  }, [misses, gameOver]);

  // Handle mouse movement to control player's position
  const handleCatch = (e) => {
    setPosition((e.clientX / window.innerWidth) * 100);
  };

  // Detect if player catches the object
  useEffect(() => {
    if (
      Math.abs(position - objectPosition.x) < 5 && // Horizontal proximity
      objectPosition.y >= 95 // Close to the bottom
    ) {
      setScore(score + 1);
      setObjectPosition({ x: Math.random() * 100, y: 0 }); // Reset the falling object
    }
  }, [position, objectPosition, score]);

  // Restart the game
  const restartGame = () => {
    setScore(0);
    setMisses(0);
    setGameOver(false);
    setObjectPosition({ x: Math.random() * 100, y: 0 });
  };

  return (
    <div
      onMouseMove={handleCatch}
      className="catch-game-container"
    >
      <h2 className="score">Score: {score}</h2>
      <h3 className="misses">Misses: {misses} / 3</h3>
      {gameOver && (
        <>
          <img src={newton} alt="Game Over" className="game-over-image" />
          <h1 className="game-over-text">Game Over</h1>
        </>
      )}

      {/* Player (Basket) */}
      <div className="basket" style={{ left: `${position}%` }} />

      {/* Falling Object (Apple) */}
      <div
        className="apple"
        style={{ top: `${objectPosition.y}%`, left: `${objectPosition.x}%` }}
      />

      {gameOver && (
        <button onClick={restartGame} className="restart-button">
          Restart
        </button>
      )}
    </div>
  );
};

export default CatchGame;
