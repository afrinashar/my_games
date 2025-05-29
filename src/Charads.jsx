import React, { useState, useEffect } from 'react';
import './Charades.css'; // Custom CSS for advanced styling

const Charades = () => {
  const [words, setWords] = useState(['Cat', 'Dog', 'Piano', 'Running']);
  const [selectedWord, setSelectedWord] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); // 10 seconds for guessing
  const [rounds, setRounds] = useState(5); // Game ends after 5 rounds
  const [isGameOver, setIsGameOver] = useState(false);
  const [newWord, setNewWord] = useState('');

  // Function to choose a random word with animation
  const chooseRandomWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setSelectedWord('');
    setTimeout(() => {
      setSelectedWord(randomWord);
      setTimer(10); // Reset timer
    }, 300); // Animation delay for smooth transition
  };

  // Handle countdown timer
  useEffect(() => {
    if (timer > 0 && !isGameOver) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else if (timer === 0 && rounds > 0) {
      // Reset word and decrease rounds
      setRounds((prev) => prev - 1);
      chooseRandomWord();
    } else if (rounds === 0) {
      setIsGameOver(true);
    }
  }, [timer, rounds, isGameOver]);

  // Add a new word to the list
  const addWord = () => {
    if (newWord.trim()) {
      setWords([...words, newWord.trim()]);
      setNewWord(''); // Clear input after adding
    }
  };

  // Handle game restart
  const restartGame = () => {
    setScore(0);
    setRounds(5);
    setIsGameOver(false);
    chooseRandomWord();
  };

  return (
    <div className="game-container">
      <h1 className="game-title">🎉 Charades 🎉</h1>
      {!isGameOver ? (
        <>
          <div className="game-info">
            <div className="timer">
              <h3>⏳ Time left: {timer}s</h3>
              <div className="timer-bar" style={{ width: `${timer * 10}%` }}></div>
            </div>
            <div className="score">
              <h3>📊 Score: <span className={score > 0 ? 'positive' : ''}>{score}</span></h3>
            </div>
            <h3>🔄 Rounds left: {rounds}</h3>
          </div>

          <div className="word-container">
            <p className={`word ${selectedWord ? 'fade-in' : 'fade-out'}`}>{selectedWord || 'Click "Get Word" to start!'}</p>
          </div>

          <div className="game-buttons">
            <button onClick={chooseRandomWord} className="btn get-word-btn" disabled={!!selectedWord}>
              Get Word
            </button>
            <button
              onClick={() => {
                setScore((prev) => prev + 1);
                chooseRandomWord();
              }}
              className="btn got-it-btn"
              disabled={!selectedWord}
            >
              Got it!
            </button>
          </div>

          <div className="add-word">
            <input
              type="text"
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              placeholder="Add a new word"
              className="input"
            />
            <button onClick={addWord} className="btn add-word-btn">Add Word</button>
          </div>
        </>
      ) : (
        <div className="game-over">
          <h2>Game Over! 🎉 Your final score is: <span>{score}</span></h2>
          <button onClick={restartGame} className="btn restart-btn">Play Again</button>
        </div>
      )}
    </div>
  );
};

export default Charades;
