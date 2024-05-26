import { useState } from 'react';
import Board from './components/Board'
import './app.scss'
import { calculatingwinner } from './calculatingwinner';
import His from './components/His';

function App() {
  const [history,setHistory] = useState([{squares: Array(9).fill(null), isXnext: false},]);
  
  const[count,setcount] = useState(0);
  const gamingBoard = history[count];
  // console.log(gamingBoard.squares)
  const winner = calculatingwinner(gamingBoard.squares);
  //  console.log(history)
  const handleSquareClick = (clickedPosition) =>{
    if(gamingBoard.squares[clickedPosition] || winner) return;
      
  setHistory((currenthistory) =>{
    const isTraversing = count+1 !== currenthistory.length 
    const lastgame = isTraversing? currenthistory[count] : currenthistory[currenthistory.length-1]
    const nextSquareState =  (lastgame.squares).map((squarevalue,position)=>{
          if(clickedPosition===position)
           return lastgame.isXnext ? 'X' : 'O';
          else
          return squarevalue;
      })
      const base = isTraversing ? currenthistory.slice(0,currenthistory.indexOf(lastgame)+1) :currenthistory
      return base.concat({squares: nextSquareState , isXnext: !lastgame.isXnext })
      
  })
  setcount((currCount) => currCount+1 )

  }
 const moveto = (move)=>{

   setcount(move);
 }
  return (
    <div className="app">
      <h2>{winner ? `The Winner is ${winner}`: count===9?'The Match Is Draw':`The Next Player is ${gamingBoard.isXnext?'X':'O'}`}
      </h2>
     <Board squares={gamingBoard.squares} handleclick={handleSquareClick} />
     <His history={history} moveto={moveto} currentmove={count}/>
    </div>
      
  )
}

export default App
