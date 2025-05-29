import React, { useState, useEffect } from 'react';
import './WhackAMole.css'; // Import the CSS file for styling
import moleImage from './assets/scooby.png'; // Add the mole image to your assets

const WhackAMole = () => {
  const [molePosition, setMolePosition] = useState(Math.floor(Math.random() * 9));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleWhack = (index) => {
    if (index === molePosition && gameActive) {
      setScore(score + 1);
      setMolePosition(Math.floor(Math.random() * 9));
    }
  };

  useEffect(() => {
    if (gameActive) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setGameActive(false);
            setGameOver(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameActive]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setGameOver(false);
    setMolePosition(Math.floor(Math.random() * 9));
  };

  return (
    <div className="whack-a-mole">
    
 <div className="">
        <p>Score: {score}</p>
        <p>Time Left: {timeLeft}s</p>
        {gameOver && <p className="game-over-message">Game Over! Your score is: {score}</p>}
      </div>
      <div className="game-board">
        {Array(9).fill(null).map((_, index) => (
          <button
            key={index}
            onClick={() => handleWhack(index)}
            className={`mole-hole ${index === molePosition ? 'active' : ''}`}
          >
            {index === molePosition && <img width={45}src={moleImage} alt="Mole" className="mole-img" />}
          </button>
        ))}
      </div>
   <button onClick={startGame} className="start-button" disabled={gameActive}>
        {gameActive ? 'Game In Progress' : 'Start Game'}
      </button>
     
    </div>
  );
};

export default WhackAMole;
