import "../App.css";
import ladder from "../assets/lader.png";
import snake1 from "../assets/snake1.png";
import snake2 from "../assets/snake2.webp";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import zero from "../assets/0.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardImgOverlay } from "react-bootstrap";

const Div = () => {
  const [positionOne, setPositionOne] = useState(1);
  const [imageOne, setImageOne] = useState(zero);
  const [positionTwo, setPositionTwo] = useState(1);
  const [imageTwo, setImageTwo] = useState(zero);

  const handleRollDice = () => {
    const diceValueOne = Math.floor(Math.random() * 6) + 1;
    const newPositionOne = positionOne + diceValueOne;
    const displayImageOne = [zero, one, two, three, four, five, six][diceValueOne];

    setImageOne(displayImageOne);

    const snakesAndLadders = {
      16: 6,
      47: 26,
      49: 11,
      56: 53,
      62: 19,
      64: 60,
      87: 24,
      93: 73,
      95: 75,
      98: 78,
    };

    const newPositionWithSnakeOrLadder = snakesAndLadders[newPositionOne] || newPositionOne;

    setPositionOne(newPositionWithSnakeOrLadder > 100 ? positionOne : newPositionWithSnakeOrLadder);
  };

  const handleRollDices = () => {
    const diceValueTwo = Math.floor(Math.random() * 6) + 1;
    const newPositionTwo = positionTwo + diceValueTwo;
    const displayImageTwo = [zero, one, two, three, four, five, six][diceValueTwo];

    setImageTwo(displayImageTwo);

    const snakesAndLadders = {
      18: 8,
      77: 26,
      69: 98,
      86: 65,
      63: 83,
      13: 42
    };

    const newPositionWithSnakeOrLadder = snakesAndLadders[newPositionTwo] || newPositionTwo;

    setPositionTwo(newPositionWithSnakeOrLadder > 100 ? positionTwo : newPositionWithSnakeOrLadder);
  };

  useEffect(() => {
    if (positionOne === 100) {
      alert("Congratulations! You won!");
    }
  }, [positionOne]);

  return (
    <>
      <div className="App">
        <header className="game-header bg-success text-light">
          <h1>Snake and Ladder Game</h1>
          <Link to="/" className="btn btn-danger">Back</Link>
        </header>

        <div className="board bg-success text-light border border-dark">
          {Array.from({ length: 100 }, (_, index) => (
            <div
              key={index}
              className={`cell ${positionOne === 100 - index ? "player-one" : positionTwo === 100 - index ? "player-two" : ""}`}
            >
              {100 - index}
            </div>
          ))}
        </div>

        <CardImgOverlay className="overlay">
          <img className="ladder" src={ladder} alt="Ladder" />
          <img className="snake" src={snake1} alt="Snake" />
          <img className="snake snake2" src={snake2} alt="Snake" />
          <img className="snake snake3" src={snake1} alt="Snake" />
          <img className="snake snake4" src={snake2} alt="Snake" />
          <img className="ladder ladder2" src={ladder} alt="Ladder" />
          <img className="ladder ladder3" src={ladder} alt="Ladder" />
        </CardImgOverlay>

        <div className="dice-controls d-flex justify-content-around">
          <div className="player-controls">
            <img src={imageOne} alt="Dice One" className="dice-image bg-primary border border-5 rounded-5" />
            <button
              disabled={positionTwo === 100}
              className="btn btn-primary text-light fw-bold"
              onClick={handleRollDice}
            >
              Roll Dice
            </button>
          </div>
          <div className="player-controls">
            <img src={imageTwo} alt="Dice Two" className="dice-image bg-danger border-5 rounded-5" />
            <button
              disabled={positionOne === 100}
              className="btn btn-danger text-light fw-bold"
              onClick={handleRollDices}
            >
              Roll Dice
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Div;
