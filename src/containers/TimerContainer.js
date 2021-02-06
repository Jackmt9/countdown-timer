import React, { Component } from 'react';
import TimerForm from '../components/TimerForm'
import TimerCard from '../components/TimerCard/TimerCard'
import { connect } from 'react-redux'

class TimerContainer extends Component {

    render() { 
        return (
            <div className='timer-container'>
                <h1>Countdown Timer</h1>
                <TimerForm addTimer={this.props.addTimer}/>
                <h2>Timers</h2>
                <div className='timer-cards'>
                {this.props.timers.map(timer => { return <TimerCard key={timer.id} timer={timer} deleteTimer={this.props.deleteTimer} /> })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        timers: state.timers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTimer: (timer) => dispatch({type: 'ADD_TIMER', timer}),
        deleteTimer: (id) => dispatch({type: 'DELETE_TIMER', id}),
        updateTimer: (timer) => dispatch({type: 'UPDATE_TIMER', timer})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);