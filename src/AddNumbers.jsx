 import { Link } from "react-router-dom";
  
const AddNumbers = () => {
 
  return (<>
    <h1 className="tic">AddNumbers</h1> <div></div>
    <div className="board bg-success text-light border">
    {Array.from({ length: 9 }, (_, index) => (
            <input
              key={index}
             >
          
            </input>
          ))}</div>    
    </>
   
  )
}
 
export default AddNumbers