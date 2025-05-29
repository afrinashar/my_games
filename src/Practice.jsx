import React,{useState} from 'react'

export  default Practice = () => {
    const [first, setfirst] = useState(null)
    // const [result, setresult] = useState(null)

    const handleClick=(key)=>{
        let num=key
        console.log(key);
        
 setfirst(num)
    }
    const randoms= Math.floor(Math.random(8)*8)
    console.log(randoms);
    const score = first? randoms==first ?"success":"wrong" :""
  return (
    <div> {first}  {randoms}
{score}
        {
            Array.from({length:8},(__dirname, index)=> <button onClick={()=>handleClick(index)} key={index}>{index}</button>

             )
        }
    </div>
  )
}
