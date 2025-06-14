import { useState } from "react"; 
import "./Hide.css";

const Hide = () => {
  const [score, setScore] = useState(0);
  const [computer, setComputer] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [showCorrectImage, setShowCorrectImage] = useState(false);
  const [showIncorrectImage, setShowIncorrectImage] = useState(false);

  const handle = (e) => {
    const random = Math.floor(Math.random() * 9);
    setComputer(random);
    setClicked(parseInt(e.target.name));

    if (random === parseInt(e.target.name)) {
      setScore(score + 1);
      setShowCorrectImage(true);
      setShowIncorrectImage(false);
    } else {
      setShowCorrectImage(false);
      setShowIncorrectImage(true);
    }
  };

  return (
    <div className="hide-game-container container-fluid p-3">
      <h3 className="text-center">Rules:</h3>
      <p className="text-center">Click the box below. If you find Perry behind the box, your score will increase.</p>

      <div className="game-area d-flex justify-content-center align-items-center flex-wrap">
        {showIncorrectImage && (
          <img
            className="image-left img-fluid"
            src="https://c.tenor.com/5TGzwoBrjQ0AAAAC/phineas-and-ferb-perry-the-platypus.gif"
            alt="Incorrect Choice"
            width={50}
            height={500}
          />
        )}

        <div className="board2 custom-cursor border">
          {Array.from({ length: 9 }, (_, index) => (
            <button
              key={index}
              className={`cell2 border border-info ${computer === index ? "perry" : ""} ${clicked !== null && clicked === index ? (computer === index ? "correct" : "incorrect") : ""}`}
              name={index}
              onClick={handle}
            ></button>
          ))}
        </div>

        {showCorrectImage && (
          <img
            className="image-right img-fluid"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cbdda0b7-8068-4548-a53f-2efcdcd9cef1/d4avgwk-a2433dbf-573a-4449-a4b5-deb0ac8387e1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiZGRhMGI3LTgwNjgtNDU0OC1hNTNmLTJlZmNkY2Q5Y2VmMVwvZDRhdmd3ay1hMjQzM2RiZi01NzNhLTQ0NDktYTRiNS1kZWIwYWM4Mzg3ZTEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.s8bgKe16beucXYvBWY7ENPVuODWwq_in3tIh6cGiXts"
            alt="Correct Choice"
          />
        )}
      </div>

      <div className="score-card card bg-light shadow-lg text-dark p-4 text-center mt-4">
        <h1>Score: {score}</h1>
      </div>
    </div>
  );
};

export default Hide;
