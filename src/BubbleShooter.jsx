import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BubbleShooter.css'; // Custom CSS for animations and styling

const generateBubbles = (count) => Array(count).fill().map(() => Math.floor(Math.random() * 255));

const BubbleShooter = () => {
  const [bubbles, setBubbles] = useState(generateBubbles(5));
  const [hitCount, setHitCount] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (bubbles.length === 0) {
      setTimeout(() => {
        if (!gameOver) {
          setBubbles(generateBubbles(level + 4)); // Increase number of bubbles with each level
          setLevel(level + 1);
        }
      }, 500);
    }
  }, [bubbles, level, gameOver]);

  const shootBubble = () => {
    if (bubbles.length > 0) {
      const newBubbles = [...bubbles];
      newBubbles.pop(); // Remove last bubble

      const audio = new Audio('/shoot.mp3');
      audio.play();

      setBubbles(newBubbles);
      setHitCount(hitCount + 1);

      if (newBubbles.length === 0) {
        setGameOver(true); // Game over when no bubbles left
      }
    }
  };

  const restartGame = () => {
    setBubbles(generateBubbles(5));
    setHitCount(0);
    setLevel(1);
    setGameOver(false);
  };

  return (
    <div className="container text-center mt-5">
      {gameOver ? (
        <div>
          <h3 className="text-danger">Game Over!</h3>
          <p className="text-secondary">Your Score: {hitCount}</p>
          <button className="btn btn-lg btn-success mt-3" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      ) : (
        <div>
          <h2 className="mb-4 text-primary">Bubble Shooter: Level {level}</h2>
          <div className="bubble-container mb-4">
            {bubbles.map((bubble, index) => (
              <div
                key={index}
                className="bubble float-up"
                style={{
                  backgroundColor: `rgb(${bubble}, ${bubble}, 255)`,
                  width: `${Math.random() * 60 + 40}px`, // Random bubble size between 40px and 100px
                  height: `${Math.random() * 60 + 40}px`,
                  animationDuration: `${Math.random() * 2 + 3}s`, // Vary float speed
                  animationDelay: `${index * 0.2}s`,
                }}
              ></div>
            ))}
          </div>
          <button className="btn btn-lg btn-danger shoot-btn" onClick={shootBubble}>
            Shoot Bubble
          </button>
          <p className="mt-3 text-secondary">Hits: {hitCount}</p>
        </div>
      )}
    </div>
  );
};

export default BubbleShooter;
