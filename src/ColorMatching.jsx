import React, { useState } from 'react';
import './ColorMatching.css'; // Import custom CSS

// Function to generate a random hex color
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorMatching = () => {
  const [targetColor, setTargetColor] = useState(generateRandomColor());
  const [selectedColor, setSelectedColor] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(5); // Player has 5 attempts
  const [feedback, setFeedback] = useState('');

  const checkMatch = () => {
    if (selectedColor === targetColor) {
      setFeedback('Matched!');
      setScore(score + 1);
      setTargetColor(generateRandomColor()); // Generate a new target color
      setSelectedColor(''); // Reset selected color
    } else {
      setFeedback('Not Matched!');
    }
    setAttempts(attempts - 1); // Decrease attempts

    // Reset feedback after a short delay
    setTimeout(() => setFeedback(''), 1000);
  };

  const resetGame = () => {
    setTargetColor(generateRandomColor());
    setSelectedColor('');
    setScore(0);
    setAttempts(5);
    setFeedback('');
  };

  return (
    <div className="color-matching-container">
      {attempts > 0 ? (
        <>
          <p className="attempts">Attempts left: {attempts}</p>
          <p className="score">Score: {score}</p>
          <div className="color-box" style={{ backgroundColor: targetColor }}></div>
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="color-input"
          />
          <button onClick={checkMatch} className="button">
            Check Match
          </button>
          {feedback && (
            <p
              className={`feedback ${feedback === 'Matched!' ? 'success' : 'error'}`}
            >
              {feedback}
            </p>
          )}
        </>
      ) : (
        <>
          <p className="game-over">Game Over! Your score is: {score}</p>
          <button onClick={resetGame} className="button">Play Again</button>
        </>
      )}
    </div>
  );
};

export default ColorMatching;
