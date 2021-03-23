import React, { useEffect, useState } from 'react';
import './TimerCard.css'

function TimerCard({timer, deleteTimer}) {

    const timeRemaining = Math.floor((timer.time - Date.parse(new Date())) / 1000)
    const [time, setTime] = useState((timeRemaining > 0) ? timeRemaining : 0)

    useEffect(() => {

        const interval = setInterval(() => {
            if (time > 0) {
                setTime(time => time - 1)
            } else {
                clearInterval(interval)
            }
        }, 1000)

        // clears interval on unmount
        return () => clearInterval(interval)
    }, [time])

    let seconds = Math.floor(time % 60)
    let minutes = Math.floor((time / 60) % 60)
    let hours = Math.floor((time / (60 * 60)) % 24)
    let days = Math.floor(time / (60 * 60 * 24))

    if (seconds + minutes + hours + days === 0){
        days = 'D'
        hours = 'O'
        minutes = 'N'
        seconds = 'E'
    }

    return (
        <div className='container' id={timer.id} style={{backgroundColor: (time === 0)? 'pink' : 'blue'}}>
            <h1 id='headline'>
                    {timer.title}
            </h1>

            <div className='countdown'>
                <ul>
                    <li><span id='days'>{days}</span>Days</li>
                    <li><span id='hours'>{hours}</span>Hours</li>
                    <li><span id='minutes'>{minutes}</span>Minutes</li>
                    <li><span id='seconds'>{seconds}</span>Seconds</li>
                </ul>
            </div>
            <button className='deleteButton' onClick={() => deleteTimer(timer.id)}>X</button>
        </div>
    );
}
 
export default TimerCard;