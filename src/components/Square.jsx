import '../app.scss'
const Square = (props) => {
  // console.log(props.value)
  return (
    <button type="button" onClick={props.onClick} className={`square ${props.value=== 'X' ? 'text-green':'text-orange' } ${props.iswiningsquare?'winning':''}`}>{props.value}</button>
  )
}

export default Square