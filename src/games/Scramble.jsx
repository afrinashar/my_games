import React from 'react'

const Scramble = () => {const [playerTiles, setPlayerTiles] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  return (
    <>
       <div className="game">
       <div className="rack">
      {tiles.map((letter, index) => (
         <div className="tile">{letter}</div>
      ))}
    </div>
      <div className="board">Game Board</div>;
    </div>
    </>
  )
}

export default Scramble
