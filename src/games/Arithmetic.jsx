import React, { useState, useEffect } from 'react';
import './Arithmetic.css'; // Import custom CSS for styling

const Arithmetic = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(1);
  const [sum, setSum] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    generateQuestion();
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(timer);
      setFeedback('Time\'s up! Please refresh to start a new game.');
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const generateQuestion = () => {
    let max = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 20 : 50;
    setNum1(Math.ceil(Math.random() * max));
    setNum2(Math.ceil(Math.random() * max));
    setSum('');
    setIsCorrect(null);
    setFeedback('');
  };

  const submit = (e) => {
    e.preventDefault();
    const isValidNumber = sum.trim() !== '' && !isNaN(+sum);
    if (!isValidNumber) {
      setFeedback('Please enter a valid number.');
      return;
    }
    
    const correctAnswer = +num1 + +num2;
    if (+sum === correctAnswer) {
      setScore(score + 1);
      setFeedback('Correct! Well done.');
      setIsCorrect(true);
    } else {
      setFeedback(`Incorrect! The correct answer was ${correctAnswer}.`);
      setIsCorrect(false);
    }

    generateQuestion();
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    generateQuestion();
  };

  return (
    <div className="arithmetic-game container text-center mt-5 p-4">
      <div className="score-timer mb-4">
        <h2 className="score-display">Score: <span>{score}</span></h2>
        <h3 className="time-left">Time Left: <span>{timeLeft}s</span></h3>
      </div>

      <form onSubmit={submit}>
        <div className="mb-3 equation-display">
          <h3>{num1} + {num2}</h3>
          <input 
            className={`form-control ${isCorrect === false ? 'is-invalid' : ''}`} 
            type="number" 
            value={sum} 
            onChange={(e) => setSum(e.target.value)}
            placeholder="Enter your answer"
          />
          {isCorrect === false && <div className="invalid-feedback">Please enter the correct answer.</div>}
        </div>

        <div className="btn-group mb-3">
          <button className="btn btn-primary me-2" type="submit">Submit</button>
          <button className="btn btn-secondary" type="button" onClick={generateQuestion}>Next Question</button>
        </div>
      </form>

      <div className="feedback mb-4">
        <h3 className={`feedback-text ${isCorrect ? 'text-success' : 'text-danger'}`}>{feedback}</h3>
      </div>

      <div className="difficulty-selector mb-4">
        <label htmlFor="difficulty" className="form-label">Select Difficulty:</label>
        <select 
          id="difficulty" 
          className="form-select" 
          value={difficulty} 
          onChange={handleDifficultyChange}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
  );
};

export default Arithmetic;
