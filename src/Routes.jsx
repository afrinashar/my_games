// Routes.jsx
import { useState, useEffect } from 'react';
 import Dashboard from './Dashboard';
import Hide from './games/Hide';
 import TomJerry from './games/TomJerry';
import Arithmetic from './games/Arithmetic';
import Scramble from './games/Scramble';
import Tetrisg from './games/Tetris';
import Dicewar from './games/Dicewar';
import Div from './games/SnakeAndLadder';
import Puzzel from './games/Puzzel';
import MainApp from './games/Cards';
import Dice from './games/Dice';
import Tictac from './games/Tictac';
import Dragon from './Dragon';
import AddNumbers from './AddNumbers';
import RockPaperScissors from './games/RockPaperScissors';
import MazeGame from './Maze';
import MemoryGame from './MemoryGame';
import SimonGame from './Simon';
import PongGame from './Pong';
import WordleClone from './Wordle';
import WhackAMole from './WhakeAMole';
import SnakeGame from './SnakeGame';
import Sudoku from './Sudoku';
import Battleship from './Battleship';
import BubbleShooter from './BubbleShooter';
import Minesweeper from './Minesweeper';
import Hangman from './Hangman';
import FlappyBird from './FlappyBird';
import EscapeRoom from './EscapeRoom';
import ConnectFour from './ConnectFour';
import ColorMatching from './ColorMatching';
import CatchGame from './CatchGame';
import Charades from './Charads';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BasketballGame from './BasketballGame';
import Test from './Test';
// import Practice from './practice';
// Array of route objects to make routes dynamic and easy to maintain
const routeConfig = [
  { 
    path: "/test", 
    element: <Test />, 
    backgroundColor: 'rgb(218, 218, 255)', 
    headerStyle: { backgroundColor: 'navy', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkblue', color: 'white' },
    title: 'Test',
    footerContent: 'Welcome to the Dashboard Page'
  },
  { 
    path: "/", 
    element: <Dashboard />, 
    backgroundColor: 'rgb(218, 218, 255)', 
    headerStyle: { backgroundColor: 'navy', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkblue', color: 'white' },
    title: '25 in one',
    footerContent: 'Welcome to the Dashboard Page'
  },
  { 
    path: "/HideAndSeek", 
    element: <Hide />, 
    backgroundColor: 'white', 
    headerStyle: { backgroundColor: ' rgb(40 160 180)', color: 'white' }, 
    footerStyle: { backgroundColor: 'rgb(40 160 180)', color: 'white' },
    title: 'Find the PERRY',
    footerContent: 'Enjoy the Hide and Seek Game'
  },
  { 
    path: "/Tom", 
    element: <TomJerry />, 
    backgroundColor: 'lightcoral', 
    headerStyle: { backgroundColor: 'darkred', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkred', color: 'white' },
    title: 'Tom and Jerry',
    footerContent: 'Tom and Jerry Game'
  },
  { 
    path: "/Arithmetic", 
    element: <Arithmetic />, 
    backgroundColor: '#fef1cc', 
    headerStyle: { backgroundColor: '#ffc107', color: 'black' }, 
    footerStyle: { backgroundColor: '#ffc107', color: 'black' },
    title: 'Arithmetic Game',
    footerContent: 'Solve Arithmetic Problems'
  },
  { 
    path: "/Scramble", 
    element: <Scramble />, 
    backgroundColor: 'lightyellow', 
    headerStyle: { backgroundColor: 'gold', color: 'black' }, 
    footerStyle: { backgroundColor: 'orange', color: 'white' },
    title: 'Scramble Game',
    footerContent: 'Enjoy the Scramble Game'
  },
  { 
    path: "/Tetris", 
    element: <Tetrisg />, 
    backgroundColor: 'lightgray', 
    headerStyle: { backgroundColor: 'purple', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkpurple', color: 'white' },
    title: 'Tetris Game',
    footerContent: 'Play Tetris'
  },
  { 
    path: "/DiceWar", 
    element: <Dicewar />, 
    backgroundColor: '#ffaeae75', 
    headerStyle: { backgroundColor: '#dc3545', color: 'white' }, 
    footerStyle: { backgroundColor: '#dc3545', color: 'white' },
    title: 'Dice War',
    footerContent: 'Roll the Dice and Win'
  },
  { 
    path: "/SnakeAndLadders", 
    element: <Div />, 
    backgroundColor: 'lightpink', 
    headerStyle: { backgroundColor: 'deeppink', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkviolet', color: 'white' },
    title: 'Snake and Ladders',
    footerContent: 'Classic Snake and Ladders Game'
  },
  { 
    path: "/Puzzel", 
    element: <Puzzel />, 
    backgroundColor: 'lightcyan', 
    headerStyle: { backgroundColor: 'teal', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkcyan', color: 'white' },
    title: 'Puzzle Game',
    footerContent: 'Solve the Puzzle'
  },
  { 
    path: "/Cards", 
    element: <MainApp />, 
    backgroundColor: 'lightseagreen', 
    headerStyle: { backgroundColor: 'darkseagreen', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkgreen', color: 'white' },
    title: 'Card Games',
    footerContent: 'Play Card Games'
  },
  { 
    path: "/Dice", 
    element: <Dice />, 
    backgroundColor: 'lightsteelblue', 
    headerStyle: { backgroundColor: 'rgb(14, 0, 94)', color: 'white' }, 
    footerStyle: { backgroundColor: 'rgb(14, 0, 94)', color: 'white' },
    title: ' Play with Afrin',
    footerContent: ''
  },
  { 
    path: "/TicTac", 
    element: <Tictac />, 
    backgroundColor: '#9634ff78', 
    headerStyle: { backgroundColor: '#B714EF', color: 'black' }, 
    footerStyle: { backgroundColor: '#B714EF', color: 'black' },
    title: 'Arithmetic Game',
    footerContent: ''
  },
  { 
    path: "/Batman", 
    element: <Dragon />, 
    backgroundColor: 'lightgrey', 
    headerStyle: { backgroundColor: 'black', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkgrey', color: 'white' },
    title: 'Batman Adventure',
    footerContent: 'Explore the Batman Adventure'
  },
  { 
    path: "/Add", 
    element: <AddNumbers />, 
    backgroundColor: 'lavender', 
    headerStyle: { backgroundColor: 'slateblue', color: 'white' }, 
    footerStyle: { backgroundColor: 'midnightblue', color: 'white' },
    title: 'Add Numbers',
    footerContent: 'Solve Addition Problems'
  },
  { 
    path: "/RockPaperScissors", 
    element: <RockPaperScissors />, 
    backgroundColor: 'lightcoral', 
    headerStyle: { backgroundColor: 'red', color: 'white' }, 
    footerStyle: { backgroundColor: 'red', color: 'white' },
    title: 'Rock Paper Scissors',
    footerContent: 'Play Rock Paper Scissors'
  },
  { 
    path: "/Maze", 
    element: <MazeGame />, 
    backgroundColor: 'lightgoldenrodyellow', 
    headerStyle: { backgroundColor: 'darkgoldenrod', color: 'white' }, 
    footerStyle: { backgroundColor: 'goldenrod', color: 'white' },
    title: 'Maze Game',
    footerContent: 'Find Your Way Through the Maze'
  },
  { 
    path: "/Memory", 
    element: <MemoryGame />, 
    backgroundColor: 'mintcream', 
    headerStyle: { backgroundColor: 'lightgreen', color: 'white' }, 
    footerStyle: { backgroundColor: 'lightgreen', color: 'white' },
    title: 'Memory Game',
    footerContent: 'Test Your Memory'
  },
  { 
    path: "/Simon", 
    element: <SimonGame />, 
    backgroundColor: 'mistyrose', 
    headerStyle: { backgroundColor: '#AD4E00', color: 'black' }, 
    footerStyle: { backgroundColor: '#AD4E00', color: 'white' },
    title: 'Simon Game',
    footerContent: 'Follow the Pattern'
  },
  { 
    path: "/Pong", 
    element: <PongGame />, 
    backgroundColor: 'lightyellow', 
    headerStyle: { backgroundColor: 'goldenrod', color: 'black' }, 
    footerStyle: { backgroundColor: 'goldenrod', color: 'white' },
    title: 'Pong Game',
    footerContent: 'Play Classic Pong'
  },
  { 
    path: "/Wordle", 
    element: <WordleClone />, 
    backgroundColor: 'lavenderblush', 
    headerStyle: { backgroundColor: 'orchid', color: 'white' }, 
    footerStyle: { backgroundColor: 'orchid', color: 'white' },
    title: 'Wordle Clone',
    footerContent: 'Guess the Word'
  },
  { 
    path: "/WhackAMole", 
    element: <WhackAMole />, 
    backgroundColor: 'lightblue', 
    headerStyle: { backgroundColor: '#2d6a4f', color: 'white' }, 
    footerStyle: { backgroundColor: '#2d6a4f', color: 'white' },
    title: 'Whack-A-Mole',
    footerContent: 'Whack the Moles!'
  },
  { 
    path: "/Snake", 
    element: <SnakeGame />, 
    backgroundColor: 'honeydew', 
    headerStyle: { backgroundColor: 'forestgreen', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkgreen', color: 'white' },
    title: 'Snake Game',
    footerContent: 'Play the Snake Game'
  },
  { 
    path: "/Sudoku", 
    element: <Sudoku />, 
    backgroundColor: 'beige', 
    headerStyle: { backgroundColor: 'peru', color: 'white' }, 
    footerStyle: { backgroundColor: 'peru', color: 'white' },
    title: 'Sudoku',
    footerContent: 'Solve the Sudoku Puzzle'
  },
  { 
    path: "/Battleship", 
    element: <Battleship />, 
    backgroundColor: 'lightsteelblue', 
    headerStyle: { backgroundColor: 'steelblue', color: 'white' }, 
    footerStyle: { backgroundColor: 'steelblue', color: 'white' },
    title: 'Battleship',
    footerContent: 'Sink the Ships'
  },
  { 
    path: "/BubbleShooter", 
    element: <BubbleShooter />, 
    backgroundColor: 'lightpink', 
    headerStyle: { backgroundColor: '#0285ff', color: 'white' }, 
    footerStyle: { backgroundColor: '#0285ff', color: 'white' },
    title: 'Bubble Shooter',
    footerContent: 'Pop the Bubbles'
  },
  { 
    path: "/Minesweeper", 
    element: <Minesweeper />, 
    backgroundColor: 'lavender', 
    headerStyle: { backgroundColor: 'slateblue', color: 'white' }, 
    footerStyle: { backgroundColor: 'mediumslateblue', color: 'white' },
    title: 'Minesweeper',
    footerContent: 'Avoid the Mines'
  },
  { 
    path: "/Hangman", 
    element: <Hangman />, 
    backgroundColor: '#dfdfdf', 
    headerStyle: { backgroundColor: 'grey', color: 'white' }, 
    footerStyle: { backgroundColor: 'grey', color: 'white' },
    title: 'Hangman',
    footerContent: 'Guess the Word'
  },
  { 
    path: "/FlappyBird", 
    element: <FlappyBird />, 
    backgroundColor: '#D6FFA8', 
    headerStyle: { backgroundColor: '#3E7401', color: 'white' }, 
    footerStyle: { backgroundColor: '#3E7401', color: 'white' },
    title: 'Flappy Bird',
    footerContent: 'Fly Through the Obstacles'
  },
  { 
    path: "/EscapeRoom", 
    element: <EscapeRoom />, 
    backgroundColor: 'mistyrose', 
    headerStyle: { backgroundColor: '#1D0306', color: '#FFF6D9' }, 
    footerStyle: { backgroundColor: '#1D0306', color: '#FFF6D9' },
    title: 'Escape Room',
    footerContent: 'Find the Exit'
  },
  { 
    path: "/ConnectFour", 
    element: <ConnectFour />, 
    backgroundColor: 'lightblue', 
    headerStyle: { backgroundColor: '#0163D3', color: 'white' }, 
    footerStyle: { backgroundColor: '#0163D3', color: 'white' },
    title: 'Connect Four',
    footerContent: 'Connect Four in a Row'
  },
  { 
    path: "/ColorMatching", 
    element: <ColorMatching />, 
    backgroundColor: 'lightcoral', 
    headerStyle: { backgroundColor: '#A9014C', color: 'white' }, 
    footerStyle: { backgroundColor: '#A9014C', color: 'white' },
    title: 'Color Matching',
    footerContent: 'Match the Colors'
  },
  { 
    path: "/CatchGame", 
    element: <CatchGame />, 
    backgroundColor: 'lightgreen', 
    headerStyle: { backgroundColor: 'limegreen', color: 'white' }, 
    footerStyle: { backgroundColor: 'limegreen', color: 'white' },
    title: 'Catch Game',
    footerContent: 'Catch the Targets'
  },
  { 
    path: "/Charades", 
    element: <Charades />, 
    backgroundColor: 'lightgoldenrodyellow', 
    headerStyle: { backgroundColor: 'goldenrod', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkgoldenrod', color: 'white' },
    title: 'Charades',
    footerContent: 'Act and Guess'
  },
  { 
    path: "/Basketball", 
    element: <BasketballGame />, 
    backgroundColor: 'lightgoldenrodyellow', 
    headerStyle: { backgroundColor: 'goldenrod', color: 'white' }, 
    footerStyle: { backgroundColor: 'darkgoldenrod', color: 'white' },
    title: 'Basketball',
    footerContent: 'Act and Guess'
  },
  // { 
  //   path: "/practice", 
  //   element: <Practice />, 
  //   backgroundColor: 'lightgoldenrodyellow', 
  //   headerStyle: { backgroundColor: 'goldenrod', color: 'white' }, 
  //   footerStyle: { backgroundColor: 'darkgoldenrod', color: 'white' },
  //   title: 'Basketball',
  //   footerContent: 'Act and Guess'
  // },
];

const DynamicBackground = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const currentRoute = routeConfig.find(route => route.path === location.pathname);
    const rootElement = document.getElementById('root');
    
    if (currentRoute) {
      rootElement.style.backgroundColor = currentRoute.backgroundColor;
    } else {
      rootElement.style.backgroundColor = 'white'; // Default background color
    }
  }, [location]);

  return children;
};
// Dynamically render the routes using the configuration
const AppRoutes = () => {
  const location = useLocation();
  const currentRoute = routeConfig.find(route => route.path === location.pathname);

  return (
    <DynamicBackground>
      {currentRoute && (
        <>
          <Header style={currentRoute.headerStyle} title={currentRoute.title} />
        </>
      )}
      
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      
      {currentRoute && (
        <>
          <Footer style={currentRoute.footerStyle} content={currentRoute.footerContent} />
        </>
      )}
    </DynamicBackground>
  );
};

export default AppRoutes;
