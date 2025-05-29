import React, { useState } from 'react'

const Test = () => {
    const [state, setState]= useState(0)
 let setData= localStorage.setItem("state", state)
    let getData= localStorage.getItem("state", state)
    const increament=()=>{
        setState(state + 1)
    }
    const decreament=()=>{
        if(state >0){
        setState(state -1)
    setData(state)
    }
    }

   

  return (
    <div>
      <button  onClick={increament} > increament</button>
      <button onClick={decreament} >Decreament</button>


     <h1  className='bg-light text-dark'> {state}:{getData}</h1>
    </div>
  )
}

export default Test
