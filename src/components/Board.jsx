import Square from "./Square"
import { useState } from "react"
import '../app.scss'

const Board = () => {
    const [square,setSquare] = useState(Array(9).fill(null))
    
    const handleSquareClick = (clickedPosition) =>{
        
    setSquare((currentSquares) =>{
        return (currentSquares.map((squarevalue,position)=>{
            if(clickedPosition===position)
             return 'X';
            else
            return squarevalue;
        })
        );
    })

    }

    const rendersquare = (position) => {
       return( <Square value={square[position]} onClick={() => handleSquareClick(position)} />);

    } ;

  return (
    <div className="board">
     <div className="board-row">
       {rendersquare(0)}
       {rendersquare(1)}
       {rendersquare(2)}
     </div>
     <div className="board-row">
      {rendersquare(3)}
      {rendersquare(4)}
      {rendersquare(5)}
     </div>
     <div className="board-row">
      {rendersquare(6)}
      {rendersquare(7)}
      {rendersquare(8)}

     </div>
    </div>
  )
}

export default Board