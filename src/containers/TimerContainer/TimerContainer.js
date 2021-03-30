import React, { Component } from 'react';
import TimerForm from '../../components/TimerForm'
import TimerCard from '../../components/TimerCard/TimerCard'
import { connect } from 'react-redux'
import { addTimer, deleteTimer, getTimers, sortTimers } from '../../actions/TimerActions'
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
                Sort By: 
                <button onClick={() => this.props.sortTimers('ENDING_SOONEST')}>Ending Soonest</button>
                <button onClick={() => this.props.sortTimers('ENDING_LAST')}>Ending Last</button>
                <button onClick={() => this.props.sortTimers('ALPHABETICAL')}>Alphabetically</button>
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
        getTimers: () => dispatch(getTimers()),
        sortTimers: (sortType) => dispatch(sortTimers(sortType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);