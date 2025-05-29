// BasketballGame.jsx
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Howl } from "howler";
import "./BasketballGame.css";
import basketballImg from "./assets/basketball.png";
import hoopImg from "./assets/hook.png";
import shootSound from "./assets/gun.mp3";
import scoreSound from "./assets/gun.mp3";
import missSound from "./assets/gun.mp3";

const shootAudio = new Howl({
  src: [shootSound],
});

const scoreAudio = new Howl({
  src: [scoreSound],
});

const missAudio = new Howl({
  src: [missSound],
});

const BasketballGame = () => {
  const [shooting, setShooting] = useState(false);
  const [score, setScore] = useState(0);
  const [shots, setShots] = useState(0);
  const [message, setMessage] = useState("");

  // Animation using react-spring
  const props = useSpring({
    to: {
      transform: shooting
        ? "translateY(-300px) translateX(50px)"
        : "translateY(0px) translateX(0px)",
      opacity: shooting ? 1 : 1,
    },
    config: { tension: 120, friction: 14 },
    reset: true,
    onRest: () => {
      if (shooting) {
        const isScore = Math.random() < 0.5; // 50% chance to score
        if (isScore) {
          setScore(score + 1);
          scoreAudio.play();
          setMessage("Great Shot!");
        } else {
          missAudio.play();
          setMessage("Missed! Try Again.");
        }
        setShots(shots + 1);
        setShooting(false);
      }
    },
  });

  const handleShoot = () => {
    if (!shooting) {
      setShooting(true);
      setMessage("");
      shootAudio.play();
    }
  };

  return (
    <div className="game-container">
       <div className="scoreboard">
        <div>Score: {score}</div>
        <div>Shots: {shots}</div>
      </div>
      <div className="court">
        {/* Hoop */}
        <img src={hoopImg} alt="Hoop" className="hoop" />

        {/* Basketball with animation */}
        <animated.img
          src={basketballImg}
          alt="Basketball"
          className="basketball"
          style={props}
        />
      </div>

      {/* Feedback Message */}
      {message && <div className="message">{message}</div>}

      {/* Shoot Button */}
      <button className="shoot-btn" onClick={handleShoot} disabled={shooting}>
        {shooting ? "Shooting..." : "Shoot!"}
      </button>
    </div>
  );
};

export default BasketballGame;
