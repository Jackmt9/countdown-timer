const TimerCard = (props) => {
    return (
        <div>
            {props.timer.title}
            {props.timer.date}
            {props.timer.time}
            <button onClick={() => props.deleteTimer(props.timer.id)}>X</button>
        </div>
    );
}
 
export default TimerCard;