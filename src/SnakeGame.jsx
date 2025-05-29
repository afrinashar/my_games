import React, { useState, useEffect, useCallback } from 'react';
import './SnakeGame.css'; // Import the CSS file for styling
import snakeHeadImage from './assets/snakehead.png'; // Snake head image
import foodImage from './assets/apple.png'; // Food image

const generateRandomFood = () => {
  const x = Math.floor(Math.random() * 20);
  const y = Math.floor(Math.random() * 20);
  return { x, y };
};

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
  const [direction, setDirection] = useState({ x: 0, y: 1 });
  const [food, setFood] = useState(generateRandomFood());
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = newSnake[0];
    const newHead = { x: head.x + direction.x, y: head.y + direction.y };

    if (checkCollision(newHead)) {
      setIsGameOver(true);
      return;
    }

    newSnake.unshift(newHead);

    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(generateRandomFood());
      setScore(score + 10);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const checkCollision = (head) => {
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) return true; // Wall collision
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) return true; // Self collision
    return false;
  };

  const handleKeyPress = useCallback((e) => {
    switch (e.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  }, [direction]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGameOver) {
        moveSnake();
      }
    }, 200);
    return () => clearInterval(interval);
  }, [snake, direction, isGameOver]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const restartGame = () => {
    setSnake([{ x: 5, y: 5 }]);
    setDirection({ x: 0, y: 1 });
    setFood(generateRandomFood());
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <div  
      tabIndex="0"
      className={`games-board ${isGameOver ? 'game-over' : ''}`}
    >
      {snake.map((segment, index) => (
        <div
          key={index}
          className={`snake-segment ${index === 0 ? 'head' : 'body'}`}
          style={{ top: `${segment.y * 20}px`, left: `${segment.x * 20}px` }}
        >
          {index === 0 && <img src={snakeHeadImage} alt="Snake Head" className="snake-head" />}
        </div>
      ))}
      <div
        className="food"
        style={{ top: `${food.y * 20}px`, left: `${food.x * 20}px` }}
      >
        <img src={foodImage} alt="Food" className="food-img" />
      </div>
      {isGameOver && (
        <div className="game-over-screen">
          <h2>Game Over</h2>
          <p>Score: {score}</p>
          <button onClick={restartGame} className="restart-button">Restart</button>
        </div>
      )}
      {!isGameOver && (
        <div className="score-board">
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
