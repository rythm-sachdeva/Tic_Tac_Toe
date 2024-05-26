import Square from "./Square"
import '../app.scss'

const Board = (props) => {
   

    const rendersquare = (position) => {
      const iswiningsquare = props.winningline.includes(position)
       return( <Square value={props.squares[position]} onClick={() => props.handleclick(position)} iswiningsquare={iswiningsquare}/>);

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

export default Board;