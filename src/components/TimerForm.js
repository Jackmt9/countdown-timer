class  extends Component {
    state = { 
        title: '',
        utc: '',
        date: '',
        time: ''
    }
    render() { 
        return (
            <div>
                <form onSubmit={null}>
                    <label>
                        Date:
                        <input type='date' name='date' min=''></input>
                    </label>
                </form>
            </div>
        );
    }
}
 
export default ;