import React, { useState, useEffect } from 'react';
import './SimonGame.css'; // Import the CSS file for styling

const colors = ['red', 'green', 'blue', 'yellow'];

const SimonGame = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (playing) {
      addColorToSequence();
    }
  }, [playing]);

  useEffect(() => {
    if (sequence.length > 0) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < sequence.length) {
          flashColor(sequence[i]);
          i++;
        } else {
          clearInterval(interval);
          setPlaying(false);
        }
      }, 1000);
    }
  }, [sequence]);

  const addColorToSequence = () => {
    setSequence((prev) => [...prev, colors[Math.floor(Math.random() * colors.length)]]);
  };

  const handleUserClick = (color) => {
    if (!playing) return;

    setUserSequence((prev) => [...prev, color]);

    if (color !== sequence[userSequence.length]) {
      alert('Game over!');
      setSequence([]);
      setUserSequence([]);
      setPlaying(false);
    } else if (userSequence.length === sequence.length - 1) {
      alert('Correct! Get ready for the next sequence.');
      addColorToSequence();
      setUserSequence([]);
    }
  };

  const flashColor = (color) => {
    const button = document.getElementById(color);
    if (button) {
      button.classList.add('flash');
      setTimeout(() => button.classList.remove('flash'), 500);
    }
  };

  return (
    <div className="simon-game-container">
      <h2>Simon Game</h2>
      <div className="color-buttons">
        {colors.map((color) => (
          <button
            key={color}
            id={color}
            onClick={() => handleUserClick(color)}
            style={{ backgroundColor: color }}
            className="color-button"
          />
        ))}
      </div>
      <button
        className="start-button"
        onClick={() => {
          setSequence([]);
          setUserSequence([]);
          setPlaying(true);
        }}
      >
        Start
      </button>
    </div>
  );
};

export default SimonGame;
