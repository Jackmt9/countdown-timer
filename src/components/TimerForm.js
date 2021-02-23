import React, { Component } from 'react';
class TimerForm extends Component {

    currentDate = () => {
        return new Date().toISOString().slice(0,10)
    }

    currentTime = () => {
        const date = new Date()
        const hours = ((date.getHours() < 10)? '0' : '') + date.getHours()
        const minutes = ((date.getMinutes() < 10)? '0' : '') + date.getMinutes()
        return `${hours}:${minutes}`
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
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class='mb-3'>
                        <label class='form-label'>
                            Timer Name
                            <input class='form-control' type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                        </label>
                        <label class='form-label'>
                            Date:
                            <input class='form-control' type='date' name='date' min={this.currentDate()} onChange={this.handleChange} value={this.state.date}/>
                        </label>
                        <label class='form-label'>
                            Time:
                            <input class='form-control' type='time' name='time' onChange={this.handleChange} value={this.state.time}/>
                        </label>
                    </div>
                    <input type='submit' value='Add Timer'/>
                </form>
            </div>
        );
    }
}
 
export default TimerForm;