import React from 'react';
import Tetris from 'react-tetris';
 
const Tetrisg = () => {
  return (
    <>
      <div className="tetris-container bg-primary text-center vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="game-title text-dark bg-light p-3 rounded shadow-sm">TETRIS</h1>
        <Tetris
          keyboardControls={{
            down: 'MOVE_DOWN',
            left: 'MOVE_LEFT',
            right: 'MOVE_RIGHT',
            space: 'HARD_DROP',
            z: 'FLIP_COUNTERCLOCKWISE',
            x: 'FLIP_CLOCKWISE',
            up: 'FLIP_CLOCKWISE',
            p: 'TOGGLE_PAUSE',
            c: 'HOLD',
            shift: 'HOLD',
          }}
        >
          {({
            HeldPiece,
            Gameboard,
            PieceQueue,
            points,
            linesCleared,
            state,
            controller,
          }) => (
            <div className="game-wrapper d-flex flex-column align-items-center">
              <HeldPiece className="held-piece" />
              <div className="scoreboard my-3 p-3 bg-light rounded shadow">
                <p className="mb-2 fs-5 text-dark">Points: <strong>{points}</strong></p>
                <p className="fs-5 text-dark">Lines Cleared: <strong>{linesCleared}</strong></p>
              </div>
              <Gameboard className="gameboard" />
              <PieceQueue className="piece-queue my-2" />
              
              {state === 'LOST' && (
                <div className="game-over mt-3 bg-danger p-4 rounded shadow">
                  <h2 className="text-white">Game Over</h2>
                  <button
                    className="btn btn-light fw-bold mt-2"
                    onClick={controller.restart}
                  >
                    Start New Game
                  </button>
                </div>
              )}
            </div>
          )}
        </Tetris>
      </div>
    </>
  );
};

export default Tetrisg;
