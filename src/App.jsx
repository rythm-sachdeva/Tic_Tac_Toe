import { useState } from 'react';
import Board from './components/Board'
import './app.scss'
import { calculatingwinner } from './calculatingwinner';

function App() {
  const [square,setSquare] = useState(Array(9).fill(null));
  const [isXNext,setIsXnext]= useState(false)
  const[count,setcount] = useState(0);
  const winner= calculatingwinner(square);
  
  const handleSquareClick = (clickedPosition) =>{
    if(square[clickedPosition] || winner) return;
      setcount((currCount) => currCount+1 )
  setSquare((currentSquares) =>{
      return (currentSquares.map((squarevalue,position)=>{
          if(clickedPosition===position)
           return isXNext ? 'X' : 'O';
          else
          return squarevalue;
      })
      );
  })
  setIsXnext((currentIsXNext) => !currentIsXNext)

  }

  return (
    <div className="app">
      <h2>{winner ? `The Winner is ${winner}`: count===9?'The Match Is Draw':`The Next Player is ${isXNext?'X':'O'}`}
      </h2>
     <Board square={square} handleclick={handleSquareClick} />
    </div>
      
  )
}

export default App
