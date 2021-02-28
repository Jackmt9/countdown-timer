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
            <div className='mb-3'>
                <form onSubmit={this.handleSubmit}>
                        <label className='form-label'>
                            Timer Name
                            <input className='form-control' type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                        </label>
                        <label className='form-label'>
                            Date
                            <input className='form-control' type='date' name='date' min={this.currentDate()} onChange={this.handleChange} value={this.state.date}/>
                        </label>
                        <label className='form-label'>
                            Time
                            <input className='form-control' type='time' name='time' onChange={this.handleChange} value={this.state.time}/>
                        </label>
                    <br/>
                    <input className='btn btn-primary mb-3' type='submit' value='Add Timer'/>
                </form>
            </div>
        );
    }
}
 
export default TimerForm;