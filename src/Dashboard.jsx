import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css"; // Ensure your CSS is set up to handle custom styling
import tom from "./assets/tomjerry.jpg";
import sum from "./assets/sum.png";
import hide from "./assets/perryt.jpg";
import jb from "./assets/jb.jpg";
import snake from "./assets/snaket.jpg";
import dice from "./assets/dice.jpg";
import dicewar from "./assets/dicewar.png";
import tic from "./assets/tict.jpg";
import test from "./assets/testrist.jpg";
import RockPaperScissors from "./assets/RockPaperScissors.jpg";
import Charades from "./assets/chardes.jpg";
import ColorMatching from "./assets/colormatching.png";
import CatchGame from "./assets/catch.jpg";
import FlappyBird from "./assets/flappy.jpg";
import EscapeRoom from "./assets/escaperoom.jpg";
import ConnectFour from "./assets/connectfour.jpg";
import MemoryGame from "./assets/memorygame.jpg";
import Pong from "./assets/pong.png";
import Sudoku from "./assets/sudoku.png";
import Battleship from "./assets/battleship.jpg";
import BubbleShooter from "./assets/bubbleshooter.jpg";
import Minesweeper from "./assets/minesweeper.png";
import Hangman from "./assets/hangman.jpg";
import Simon from "./assets/simon.png";
import Maze from "./assets/maze.png";
import WhackAMole from "./assets/mole.jpg";
import SnakeGame from "./assets/snake.jpg";
import Wordle from "./assets/wordle.jpg";
import Basketball from "./assets/basketball.png";

const Dashboard = () => {
  const games = [
    { img: hide, title: "Find the Perry", link: "HideAndSeek" },
    { img: dice, title: "Lucky Roll", link: "Dice" },
    { img: sum, title: "Find Sum", link: "Arithmetic" },
    { img: tic, title: "Tic Tac Toe", link: "TicTac" },
    { img: RockPaperScissors, title: "Rock Paper Scissors", link: "RockPaperScissors" },
    { img: Charades, title: "Charades", link: "Charades" },
    { img: ColorMatching, title: "Color Matching", link: "ColorMatching" },
    { img: CatchGame, title: "Catch the Apple", link: "CatchGame" },
    { img: FlappyBird, title: "Flappy Bird", link: "FlappyBird" },
    { img: EscapeRoom, title: "Escape Room", link: "EscapeRoom" },
    { img: ConnectFour, title: "Connect Four", link: "ConnectFour" },
    { img: MemoryGame, title: "Memory Game", link: "Memory" },
    { img: Pong, title: "Pong", link: "Pong" },
    { img: Sudoku, title: "Sudoku", link: "Sudoku" },
    { img: Battleship, title: "Battleship", link: "Battleship" },
    { img: BubbleShooter, title: "Bubble Shooter", link: "BubbleShooter" },
    { img: Minesweeper, title: "Minesweeper", link: "Minesweeper" },
    { img: Hangman, title: "Hangman", link: "Hangman" },
    { img: Simon, title: "Simon Game", link: "Simon" },
    { img: Maze, title: "Maze", link: "Maze" },
    { img: WhackAMole, title: "Catch the Scooby", link: "WhackAMole" },
    { img: SnakeGame, title: "Snake Game", link: "Snake" },
    { img: Wordle, title: "Wordle Clone", link: "Wordle" },
    { img: Basketball, title: "Basketball Clone", link: "Basketball" },
  ];

  return (
    <div className="dashboard-container text-center p-5">
      <Row className="g-4">
        {games.map((game, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className="game-card shadow-lg">
              <Link to={game.link} className="text-decoration-none text-dark">
                <Card.Img variant="top" src={game.img} className="game-img" />
                <Card.Body>
                  <Card.Title className="fw-bold fs-3">{game.title}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;
