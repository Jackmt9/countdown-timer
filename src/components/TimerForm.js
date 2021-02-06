import React, { Component } from 'react';
class TimerForm extends Component {

    state = { 
        title: '',
        date: '',
        time: ''
    }

    todaysDate = () => {
        return new Date().toISOString().slice(0,10)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTimer(this.state)
        this.setState({
            title: '',
            date: '',
            time: ''
        });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state)
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Timer Name
                        <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                    </label>
                    <label>
                        Date:
                        <input type='date' name='date' min={this.todaysDate()} onChange={this.handleChange} value={this.state.date}/>
                    </label>
                    <label>
                        Time:
                        <input type='time' name='time' onChange={this.handleChange} value={this.state.time}/>
                    </label>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}
 
export default TimerForm;