import React, {PropTypes, Component} from 'react'

export default class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    onIdSelect(e) {
        e.preventDefault()
        this.props.getChat(this.state.value)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {id, getChat, error, title, users} = this.props
        return <div className='ib page'>
            <form onSubmit={::this.onIdSelect}>
                <label>
                    Chat ID:
                    <input type="text" value={this.state.value} onChange={::this.handleChange}/>
                </label>
                <button type="submit" value="Submit">Get chat</button>
            </form>
            { title ? <p > {id} {users}</p> : '' }
            { error ? <p className='error'> Нет доступа к чату</p> : '' }
        </div>
    }
}

Dialog.propTypes = {
    id: PropTypes.string.isRequired,
    getChat: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired
}