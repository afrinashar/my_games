import React, { useState, useEffect } from 'react';
import birdImage from './assets/angry.png'; // Make sure to import your bird image
import pipeTopImage from './assets/pipe.png'; // Import the pipe top image
import pipeBottomImage from './assets/pipe1.png'; // Import the pipe bottom image

const FlappyBird = () => {
  const [position, setPosition] = useState(50);
  const [isGameOver, setIsGameOver] = useState(false);
  const [pipes, setPipes] = useState([{ top: 30, left: 100 }]);
  const [gameSpeed, setGameSpeed] = useState(2);
  const [score, setScore] = useState(0);

  // Gravity effect and game loop
  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      setPosition((pos) => (pos < 90 ? pos + 2 : pos));
      setPipes((pipes) => pipes.map(pipe => ({ ...pipe, left: pipe.left - gameSpeed })));

      // Handle pipe reset and score increase
      setPipes((pipes) => {
        if (pipes[0].left < -10) {
          setScore(score + 1);
          return [...pipes.slice(1), { top: Math.random() * 50 + 20, left: 100 }];
        }
        return pipes;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isGameOver, gameSpeed, score]);

  // Collision detection
  useEffect(() => {
    const birdTop = position;
    const birdBottom = position + 5;
    const birdLeft = 50;
    const birdRight = 55;

    const collided = pipes.some(pipe => {
      const pipeLeft = pipe.left;
      const pipeRight = pipe.left + 10;
      const pipeTop = pipe.top;
      const pipeBottom = pipe.top + 30;

      return (
        birdRight > pipeLeft &&
        birdLeft < pipeRight &&
        (birdTop < pipeTop || birdBottom > pipeBottom)
      );
    });

    if (collided || position >= 90) {
      setIsGameOver(true);
    }
  }, [position, pipes]);

  const handleJump = () => {
    if (!isGameOver) setPosition((pos) => (pos > 10 ? pos - 10 : pos));
  };

  const handleRestart = () => {
    setPosition(50);
    setIsGameOver(false);
    setPipes([{ top: 30, left: 100 }]);
    setScore(0);
  };

  return (
    <div
      onClick={handleJump}
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(0deg, rgba(172,255,172,0.43385276473870793) 0%, rgba(0,156,34,0.4870740532541141) 100%)',
        overflow: 'hidden',
        fontFamily: 'sans-serif',
      }}
    >
      {!isGameOver && (
        <>
          {/* Bird */}
          <img
            src={birdImage}
            alt="bird"
            style={{
              position: 'absolute',
              top: `${position}%`,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '50px',
              height: '50px',
              transition: 'top 0.1s ease',
             }}
          />

          {/* Pipes */}
          {pipes.map((pipe, index) => (
            <React.Fragment key={index}>
              <img
                src={pipeTopImage}
                alt="pipeTop"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: `${pipe.left}%`,
                  width: '10%',
                  height: `${pipe.top}%`,
                  objectFit: 'cover',
                }}
              />
              <img
                src={pipeBottomImage}
                alt="pipeBottom"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: `${pipe.left}%`,
                  width: '10%',
                  height: `${100 - pipe.top - 30}%`,
                  objectFit: 'cover',
                }}
              />
            </React.Fragment>
          ))}

          {/* Score */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              color: 'black',
              fontSize: '24px',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            }}
          >
            Score: {score}
          </div>
        </>
      )}

      {/* Game Over Screen */}
      {isGameOver && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <h2>Game Over</h2>
          <p>Score: {score}</p>
          <button
            onClick={handleRestart}
            style={{
              padding: '10px 20px',
              background: 'red',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default FlappyBird;
