import React,{useState} from 'react'
import "../App.css"
const Puzzel = () => {
const generateTile=()=>{
  const [state,setState]=useState()
  const [swaptile,setSwapetile]=useState()

  let NewTiles=[];
  for(let i=0; i<25;i++){
    let tiles={id:i}
    NewTiles.push(tiles)
  }
  //randamise array
  let length =NewTiles.length
  for (let i=0;i<length;i++){
    let random =Math.floor(Math.random())
    let randomArray =NewTiles.splice(random, 1)
    NewTiles.push(randomArray[0])
    console.log(NewTiles, random,randomArray);
  }
}
const handleSwap=(id)=>{
  if(tileSelected){
    setSwapetile(selectedTileId, id)
  }
  else{
    setState({selectedTileId:id},{ tileSelected:true})
  }
}
  const swapTile =(id1,id2)=>{
    let NewTiles=[...tilesArray]
    let index1=tilesArray.findIndex(tile=>tile.id===id1)
    let index2=tilesArray.findIndex(tile=>tile.id===id2)
let tile1={...NewTiles[index1]}
let tile2={...NewTiles[index2]}
NewTiles[index2]=tile1
NewTiles[index2]=tile2
setState({tilesArray:NewTiles}, {tileSelected:false}, {tileSelectedId:null})


  }
    return (
      <>
        <h1>Image Puzzle Game</h1>
        <div className='App'>
          <div className='container'>
{
  tilesArr.map((tile,i)=><div  onClick={()=>handleSwap(tile.id)} key={i}    className={selectedTileId===tile.id ? "tiolewrap selected " : " title wrap"}> {tile.id}</div>  )
}


          </div>
        </div>
        
      </>
    );
  }

export default Puzzel
