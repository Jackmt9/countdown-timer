import React, { Component } from 'react';
class TimerForm extends Component {

    currentDate = () => {
        return new Date().toISOString().slice(0,10)
    }

    currentTime = () => {
        const date = new Date()
        return `${date.getHours()}:${date.getMinutes()}`
    }

    state = { 
        title: '',
        date: this.currentDate(),
        time: this.currentTime()
    }


    handleSubmit = (event) => {
        event.preventDefault()
        const time = Date.parse(new Date(this.state.date + " " + this.state.time))
        this.props.addTimer({time, title: this.state.title})
        this.setState({
            title: '',
            date: this.currentDate(),
            time: this.currentTime()
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
                        <input type='date' name='date' min={this.currentDate()} onChange={this.handleChange} value={this.state.date}/>
                    </label>
                    <label>
                        Time:
                        <input type='time' name='time' onChange={this.handleChange} value={this.state.time}/>
                    </label>
                    <input type='submit' value='Add Timer'/>
                </form>
            </div>
        );
    }
}
 
export default TimerForm;