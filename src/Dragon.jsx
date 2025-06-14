// src/Game.js
import   { useState, useEffect } from 'react';
  import './dragon.css'
  import batman from "../src/assets/batman.gif"
  import joker from "../src/assets/joker.gif"
  import game from "../src/assets/game.jpg"
  import obst from "../src/assets/obst.png"

  const Dino = ({ dinoY }) => {
    const dinoStyle = {
      position: 'absolute',
      bottom: `${dinoY}px`,
       
      margin:"10px"
    };
  
    return <>
   <div> <img className=""  src={batman} height={150} width={50} style={dinoStyle}></img></div><div><br></br><br></br><br></br><div></div><img className="mx-5 p-4"  src={joker} height={150} width={100} style={dinoStyle}></img></div></>
  };
  
  const Ground = () => {
    const groundStyle = {
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      width: '100%',
      height: '55px',
      backgroundColor: 'green',
    };
  
    return <div style={groundStyle}></div>;
  };
  
  const Obstacle = ({ obstacleX }) => {
    const obstacleStyle = {
      position: 'absolute',
      bottom: '40px',
      left: `${obstacleX}px`,
      width: '70px',
      height: '78px',
      
    };
  
    return <img style={obstacleStyle} src={obst}></img> 
  };
  
  const Dragon = () => {
    const [dinoY, setDinoY] = useState(0);
    const [obstacleX, setObstacleX] = useState(500);
    const [isJumping, setIsJumping] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [count, setCount] = useState(0);
 
    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);
    useEffect(() => {
      const handleJump = () => {
        if (!isJumping) {
          setIsJumping(true);
          let jumpHeight = 0;
          const jumpInterval = setInterval(() => {
            if (jumpHeight > 100) {
              clearInterval(jumpInterval);
              const fallInterval = setInterval(() => {
                jumpHeight -= 2;
                setDinoY(jumpHeight);
                if (jumpHeight <= 0) {
                  clearInterval(fallInterval);
                  setIsJumping(false);
                }
              }, 20);
            } else {
              jumpHeight += 4;
              setDinoY(jumpHeight);
            }
          }, 20);
        }
      };
  
      const handleKeyDown = (event) => {
        if (event.code === 'Space') {
          handleJump();
        }
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [isJumping]);
  
    useEffect(() => {
      const obstacleInterval = setInterval(() => {
        setObstacleX((prevX) => {
          if (prevX < -20) {
            return 500;
          }
          return prevX - 4;
        });
      }, 20);
  
      return () => {
        clearInterval(obstacleInterval);
      };
    }, []);
  
    useEffect(() => {
      if (obstacleX < 70 && obstacleX > 30 && dinoY < 50) {
        setGameOver(true);
      }
    }, [obstacleX, dinoY]);
    const refreshPage=()=>{ 
      window.location.reload(); 
  }
    return (
      <div>
        
        {gameOver ? (
          <div><h1>GAME OVER</h1>  <button className='btn btn-success'  onClick={refreshPage}>retry</button><img className='m-5 batman-result' src={game}  ></img></div>
        ) : (
          <><h1 className='text-danger'>BATMAN v/s JOKER</h1>
          <h6> Score :{count}</h6>
            <Dino dinoY={dinoY} />
            <Ground />
            <Obstacle obstacleX={obstacleX} />
          </>
        )}
      </div>
    );
  };

export default Dragon;
