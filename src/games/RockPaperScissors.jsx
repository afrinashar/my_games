import React, { useState } from 'react';
import './RockPaperScissors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissor from "../assets/scissor.png";
import rocks from "../assets/rocks.jpg";
import papers from "../assets/papers.jpg";
import scissors from "../assets/scissors.jpg";

const options = [rock, paper, scissor];
const backgroundOptions = [rocks, papers, scissors];

function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [round, setRound] = useState(1);
  const [scores, setScores] = useState({ win: 0, lose: 0, tie: 0 });

  const playRound = (choice) => {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    setPlayerChoice(choice);
    setComputerChoice(randomChoice);

    let result;
    if (choice === randomChoice) {
      result = 'tie';
    } else if (
      (choice === rock && randomChoice === scissor) ||
      (choice === paper && randomChoice === rock) ||
      (choice === scissor && randomChoice === paper)
    ) {
      result = 'win';
    } else {
      result = 'lose';
    }

    setScores((prevScores) => ({
      ...prevScores,
      [result]: prevScores[result] + 1,
    }));

    setRound(round + 1);
  };

  return (
    <div className="game-container bg-gradient">
      <div className="scoreboard row mb-4 justify-content-center">
        {['Win', 'Tie', 'Lose'].map((label, idx) => (
          <div className="col-4" key={idx}>
            <div className={`score-card ${label.toLowerCase()} rounded shadow`}>
              <h4>{label}</h4>
              <p>{scores[label.toLowerCase()]}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="round-counter mb-3 shadow">
        Round: <strong>{round}</strong>
      </div>

      <div className="choices mb-4">
        <img className="choice-image player-choice rounded shadow-lg" src={playerChoice} alt={playerChoice || ''} />
        <img className="choice-image computer-choice rounded shadow-lg" src={computerChoice} alt={computerChoice || ''} />
      </div>

      <div className="options row justify-content-center">
        {options.map((option, index) => (
          <div className="col-4" key={index}>
            <button className="option-btn btn btn-lg btn-outline-light shadow" onClick={() => playRound(option)}>
              <img className="icon-image rounded-circle" src={backgroundOptions[index]} alt={option} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RockPaperScissors;
