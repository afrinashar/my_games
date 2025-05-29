import React, { useState } from 'react';
import './MemoryGame.css'; // Import the CSS file for styling
import memory from "../src/assets/memory.png";

const cardArray = ['🍎', '🍌', '🍍', '🍇', '🍒', '🍓', '🍎', '🍌', '🍍', '🍇', '🍒', '🍓'];

const shuffleCards = () => cardArray.sort(() => Math.random() - 0.5);

const MemoryGame = () => {
  const [cards, setCards] = useState(shuffleCards());
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleFlip = (index) => {
    if (flipped.length === 1 && flipped[0] === index) return;
    if (flipped.length === 2 || matched.includes(cards[index]) || gameOver) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = newFlipped;
      if (cards[firstIndex] === cards[secondIndex]) {
        setMatched([...matched, cards[firstIndex]]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }

    if (matched.length === cardArray.length / 2 - 1) {
      setGameOver(true);
    }
  };

  return (
    <div className="memory-game-container">
      <div className="game-info">
        <p>Moves: {moves}</p>
        {gameOver && (
          <div className="game-over-container">
            <img width={70} src={memory} alt="Memory" />
            <h2 className="game-over">Congratulations! You Won!</h2>
          </div>
        )}
      </div>
      <div className="memory-game">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flipped.includes(index) || matched.includes(card) ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
          >
            {flipped.includes(index) || matched.includes(card) ? card : '❓'}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={() => {
        setCards(shuffleCards());
        setFlipped([]);
        setMatched([]);
        setMoves(0);
        setGameOver(false);
      }}>Restart Game</button>
    </div>
  );
};

export default MemoryGame;
