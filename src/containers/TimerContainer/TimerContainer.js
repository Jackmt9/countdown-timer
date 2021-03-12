import React, { Component } from 'react';
import TimerForm from '../../components/TimerForm'
import TimerCard from '../../components/TimerCard/TimerCard'
import { connect } from 'react-redux'
import { addTimer, deleteTimer, getTimers } from '../../actions/TimerActions'
import './TimerContainer.css'

class TimerContainer extends Component {
    
    componentDidMount() {
        this.props.getTimers()
    }

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
        addTimer: (timer) => dispatch(addTimer(timer)),
        deleteTimer: (id) => dispatch(deleteTimer(id)),
        // updateTimer: (timer) => dispatch({type: 'UPDATE_TIMER', timer}),
        getTimers: () => dispatch(getTimers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);