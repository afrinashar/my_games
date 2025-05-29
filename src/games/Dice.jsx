import React, { useState } from "react";
import "./Dice.css";
import zero from "../assets/0.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";

const Dice = () => {
  const [comment, setComment] = useState("");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [rollCount, setRollCount] = useState(0);
  const [image, setImage] = useState(zero);
  const [animating, setAnimating] = useState(false);

  const rollDice = () => Math.floor(Math.random() * 6);

  const handleClick = (e) => {
    setAnimating(true);
    setTimeout(() => {
      const output = rollDice();
      const pics = [zero, one, two, three, four, five, six][output];
      setImage(pics);
      setInput(e.target.name);
      setRollCount(rollCount + 1);

      if (e.target.name == output) {
        setComment("Well done, roll again!");
        setScore(score + 1);
      } else {
        setComment("Try again!");
      }
      setAnimating(false);
    }, 1000);
  };

  const resetGame = () => {
    setScore(0);
    setRollCount(0);
    setComment("");
    setImage(zero);
  };

  return (
    <div className="game-container">
      <div className="score-section  d-flex text-center p-6">
        <h2>Score: {score}</h2>
        <h3 className="comment-text m-5">{comment}</h3>
        <h4>Rolls: {rollCount}</h4>
      </div>
   <div className={`dice-image ${animating ? "rolling" : ""}`}>
        <img className="border border-dark" src={image} alt="dice" />
      </div>
      <div className="dice-buttons m-4">
        {[...Array(6).keys()].map((num) => (
          <button
            key={num}
            onClick={handleClick}
            name={num}
            className="dice-button"
            disabled={animating}
          >
            {num + 1}
          </button>
        ))}
      </div>

           <button onClick={resetGame} className="buttonreset">Reset Game</button>

    </div>
  );
};

export default Dice;
