import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hangman.css'; // Custom CSS for hangman drawing and styling

const secretWord = 'REACT';
const maxAttempts = 6;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Hangman = () => {
  const [attempts, setAttempts] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter) && !gameOver) {
      setGuessedLetters([...guessedLetters, letter]);

      if (!secretWord.includes(letter)) {
        setAttempts(attempts + 1);
        if (attempts + 1 === maxAttempts) {
          setGameOver(true);
        }
      } else {
        if (secretWord.split('').every((l) => guessedLetters.includes(l) || l === letter)) {
          setWinner(true);
          setGameOver(true);
        }
      }
    }
  };

  const handleRestart = () => {
    setAttempts(0);
    setGuessedLetters([]);
    setGameOver(false);
    setWinner(false);
  };

  const renderWord = () => {
    return secretWord.split('').map((letter, i) => (
      <span key={i} className="word-letter">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  const renderKeyboard = () => {
    return alphabet.map((letter, i) => (
      <button
        key={i}
        className="letter-button btn btn-primary m-1"
        onClick={() => handleGuess(letter)}
        disabled={guessedLetters.includes(letter) || gameOver}
      >
        {letter}
      </button>
    ));
  };

  const hangmanStages = [
    '',
    'Head',
    'Head, Body',
    'Head, Body, Left Arm',
    'Head, Body, Left Arm, Right Arm',
    'Head, Body, Left Arm, Right Arm, Left Leg',
    'Head, Body, Left Arm, Right Arm, Left Leg, Right Leg'
  ];

  return (
    <div className="container hangman-container text-center mt-4">
 
      <div className="hangman-stage mb-3">
        <p>{hangmanStages[attempts]}</p>
      </div>

      <div className="word-display mb-3">{renderWord()}</div>

      <div className="keyboard mb-4">{renderKeyboard()}</div>

      <p>Attempts Left: {maxAttempts - attempts}</p>

      {gameOver && (
        <div>
          {winner ? (
            <h3 className="text-success">Congratulations! You guessed the word!</h3>
          ) : (
            <h3 className="text-danger">Game Over! The word was {secretWord}</h3>
          )}
          <button className="btn btn-danger mt-3" onClick={handleRestart}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default Hangman;
