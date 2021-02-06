import React, { Component } from 'react';
import TimerForm from '../components/TimerForm'
import TimerCard from '../components/TimerCard'
import { connect } from 'react-redux'

class TimerContainer extends Component {

    render() { 
        return (
            <div>
                <h1>Timer Container</h1>
                <TimerForm addTimer={this.props.addTimer}/>
                <h2>Timers</h2>
                {this.props.timers.map(timer => { return <TimerCard timer={timer} deleteTimer={this.props.deleteTimer}/> })}
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