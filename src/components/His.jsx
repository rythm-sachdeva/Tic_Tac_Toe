import '../app.scss'

const His = ({history,moveto,currentmove}) => {
 return (
<div className="history-wrapper">
    <ul className='history'>
        {
            history.map((_,index) => (
            <li key={index} >
                <button type="button" className={`btn-move ${currentmove===index ? 'active':''}`} onClick={()=>moveto(index)}>{ index === 0 ? 'Go to Start Of Game':`Go to Move# ${index}`}</button>
            </li>
            ))
        }
    </ul>
</div>
 );
};
export default His