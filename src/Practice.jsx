import React,{useState} from 'react'

<<<<<<< HEAD
export default Practice = () => {
=======
export  default Practice = () => {
>>>>>>> 0e8f6dfb7ce5e5c080b0963b49d57ed9d271d720
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
