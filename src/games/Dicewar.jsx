import React, { useState } from "react";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import zero from "../assets/0.png";
import "./Dicewar.css"; // Importing custom CSS for styling

const Dicewar = () => {
  const [imageOne, setImageOne] = useState(zero);
  const [imageTwo, setImageTwo] = useState(zero);
  const [positionOne, setPositionOne] = useState(1);
  const [positionTwo, setPositionTwo] = useState(1);
  const [message, setMessage] = useState("Player RED rolls first");
  const [playerTurn, setPlayerTurn] = useState("RED");

  const diceImages = [one, two, three, four, five, six];

  // const snakesAndLadders = {
  //   16: 6,
  //   47: 26,
  //   49: 11,
  //   56: 53,
  //   62: 19,
  //   64: 60,
  //   87: 24,
  //   93: 73,
  //   95: 75,
  //   98: 78,
  // };

  const rollDice = (player) => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    const newPosition =
      player === "RED" ? positionOne + diceValue : positionTwo + diceValue;
    const displayImage = diceImages[diceValue - 1];

    if (player === "RED") {
      setImageOne(displayImage);
      setPositionOne(
        snakesAndLadders[newPosition] || newPosition > 100
          ? positionOne
          : newPosition
      );
      setPlayerTurn("BLUE");
      setMessage("Player BLUE's Turn");
    } else {
      setImageTwo(displayImage);
      setPositionTwo(
        snakesAndLadders[newPosition] || newPosition > 100
          ? positionTwo
          : newPosition
      );
      setPlayerTurn("RED");
      setMessage(
        positionOne === positionTwo
          ? "It's a Tie!"
          : positionOne > positionTwo
          ? "RED Wins!"
          : "BLUE Wins!"
      );
    }
  };

  const handleRoll = (player) => {
    rollDice(player);
  };

  const resetGame = () => {
    setPositionOne(1);
    setPositionTwo(1);
    setImageOne(zero);
    setImageTwo(zero);
    setMessage("Player RED rolls first");
    setPlayerTurn("RED");
  };

  return (
    <div className="container-fluid game-container">
      {/* <h3 className="mb-4 text-center">Snakes & Ladders Dice Game</h3> */}
      <p className="text-center mb-4 game-rules">
        Player with the highest dice value wins. Beware of snakes!
      </p>
      <div className="row mb-5 justify-content-center">
        <div className="col-md-4 col-sm-12 card mx-2 p-3 text-center dice-card">
          <img
            src={imageTwo}
            alt="dice"
            className="dice-img mb-3"
          />
          <button
            disabled={playerTurn !== "BLUE"}
            className="btn btn-danger text-light fw-bold w-100"
            onClick={() => handleRoll("BLUE")}
          >
            BLUE Roll
          </button>
        </div>
        <div className="col-md-4 col-sm-12 card mx-2 p-3 text-center dice-card">
          <img
            src={imageOne}
            alt="dice"
            className="dice-img mb-3"
          />
          <button
            disabled={playerTurn !== "RED"}
            className=" btn-primary text-light fw-bold w-100"
            onClick={() => handleRoll("RED")}
          >
            RED Roll
          </button>
        </div>
      </div>
      <div className="card text-center p-4 result-card">
        <h1>{message}</h1>
        <button className="btn btn-warning mt-3" onClick={resetGame}>
          Re-Match
        </button>
      </div>
    </div>
  );
};

export default Dicewar;
