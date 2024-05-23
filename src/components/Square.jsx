import '../app.scss'
const Square = (props) => {
  return (
    <button type="button" onClick={props.onClick} className="square">{props.value}</button>
  )
}

export default Square