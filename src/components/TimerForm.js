import React, { Component } from 'react';
class TimerForm extends Component {

    state = { 
        title: '',
        utc: '',
        date: '',
        time: ''
    }

    todaysDate = () => {
        return new Date().toISOString().slice(0,10)
    }

    handleSubmit = () => {
        this.props.addTimer(this.state)
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Date:
                        <input type='date' name='date' min={this.todaysDate}></input>
                    </label>
                </form>
            </div>
        );
    }
}
 
export default TimerForm;