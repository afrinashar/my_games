import React, { useState, useEffect } from 'react';
import './PongGame.css'; // Import the CSS file for styling

const PongGame = () => {
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });
  const [paddlePosition, setPaddlePosition] = useState(50);
  const [ballDirection, setBallDirection] = useState({ dx: -1, dy: 1 });
  const [score, setScore] = useState(0);

  const moveBall = () => {
    setBallPosition((prev) => ({
      x: prev.x + ballDirection.dx,
      y: prev.y + ballDirection.dy,
    }));
  };

  const checkCollision = () => {
    const ballX = ballPosition.x;
    const ballY = ballPosition.y;
    const paddleY = paddlePosition;

    // Bounce off the top and bottom
    if (ballY <= 0 || ballY >= 95) {
      setBallDirection((prev) => ({ ...prev, dy: -prev.dy }));
    }

    // Bounce off the paddle
    if (ballX <= 5 && ballY >= paddleY && ballY <= paddleY + 10) {
      setBallDirection((prev) => ({ ...prev, dx: -prev.dx }));
      setScore((prev) => prev + 1); // Increment score
    }

    // Reset the ball if it goes off screen
    if (ballX <= 0 || ballX >= 100) {
      setBallPosition({ x: 50, y: 50 });
      setBallDirection({ dx: -1, dy: 1 }); // Reset direction to leftward
      setScore(0); // Reset score
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveBall();
      checkCollision();
    }, 20);
    return () => clearInterval(interval);
  }, [ballPosition, ballDirection]);

  const handleMovePaddle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPaddlePosition = Math.min(
      Math.max(((e.clientY - rect.top) / rect.height) * 100 - 5, 0),
      90
    );
    setPaddlePosition(newPaddlePosition);
  };

  return (
    <div className="pong-game" onMouseMove={handleMovePaddle}>
      <div className="paddle" style={{ top: `${paddlePosition}%` }} />
      <div className="ball" style={{ top: `${ballPosition.y}%`, left: `${ballPosition.x}%` }} />
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default PongGame;
