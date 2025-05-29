import { useState } from "react";
import xImage from "../assets/x.png";
import oImage from "../assets/o.png";
import "./Tic.css";

const TicTac = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";  // Store "X" or "O"
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every(Boolean)) {
    status = "It's a Draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const start = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <>
      {/* <Link to="/" className="btn status tic">Back</Link> */}
      <div className="status tic"><h3>{status}</h3></div>
      <div className="boardss">
        {Array.from({ length: 9 }, (_, index) => (
          <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
      <button className="ticBtn" onClick={start}>Start</button>
    </>
  );
};

function Square({ value, onSquareClick }) {
  return (
    <button className="square tic" onClick={onSquareClick}>
      {value === "X" && <img src={xImage} alt="X" className="fit-image" />}
      {value === "O" && <img src={oImage} alt="O" className="fit-image" />}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTac;
