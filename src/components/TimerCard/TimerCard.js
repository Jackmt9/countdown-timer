import React, { Component } from 'react';
import './TimerCard.css'
class TimerCard extends Component {

    getInitialTime = () => {
        const timeRemaining = Math.floor((this.props.timer.time - Date.parse(new Date())) / 1000)
        return (timeRemaining > 0) ? timeRemaining : 0
    }

    state = {
        // timeRemaining in seconds
        timeRemaining: this.getInitialTime(),
    }

    componentDidMount() {
        // debugger
        this.interval = setInterval(this.tickClock, 1000)
    }

    componentWillUnmount() {
        this.stopClock()
    }

    tickClock = () => {
        this.setState(prevState => ({
            timeRemaining:  (prevState.timeRemaining - 1 > 0) ? prevState.timeRemaining - 1 : 0
        }))
        if(this.state.timeRemaining <= 0){ this.stopClock() }
    }

    stopClock = () => {
        clearInterval(this.interval)
    }

    render() { 
        const time = this.state.timeRemaining
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
            <div className='container' id={this.props.timer.id}>
                <h1 id='headline'>
                        {this.props.timer.title}
                </h1>

                <div className='countdown'>
                    <ul>
                        <li><span id='days'>{days}</span>Days</li>
                        <li><span id='hours'>{hours}</span>Hours</li>
                        <li><span id='minutes'>{minutes}</span>Minutes</li>
                        <li><span id='seconds'>{seconds}</span>Seconds</li>
                    </ul>
                </div>
                <button className='deleteButton' onClick={() => this.props.deleteTimer(this.props.timer.id)}>X</button>
            </div>
        );
    }
}
 
export default TimerCard;