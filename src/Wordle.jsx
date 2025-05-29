import React, { useState } from 'react';
import './WordleClone.css'; // Import the CSS file for styling

const secretWord = 'HELLO';

const getColor = (letter, index) => {
  if (letter === secretWord[index]) {
    return 'green'; // Correct letter and position
  }
  if (secretWord.includes(letter)) {
    return 'yellow'; // Correct letter but wrong position
  }
  return 'gray'; // Incorrect letter
};

const WordleClone = () => {
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 5) {
      setAttempts([...attempts, input.toUpperCase()]);
      setInput('');
    } else {
      alert('Please enter a 5-letter word.');
    }
  };

  return (
    <div className="wordle-clone">
      <h1>Wordle Clone</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={5}
          className="input-box"
          placeholder="Enter guess"
        />
        <button type="submit" className="submit-button">Guess</button>
      </form>
      <div className="attempts">
        {attempts.map((attempt, index) => (
          <div key={index} className="attempt">
            {attempt.split('').map((letter, i) => (
              <span
                key={i}
                className="letter"
                style={{ backgroundColor: getColor(letter, i) }}
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
      {attempts.length === 6 && !attempts.includes(secretWord) && (
        <div className="game-over">Game Over! The word was {secretWord}.</div>
      )}
    </div>
  );
};

export default WordleClone;
