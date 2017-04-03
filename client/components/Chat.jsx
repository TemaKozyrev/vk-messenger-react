import React, { PropTypes, Component } from 'react'

export default class Chat extends Component {

    render() {
        const { name, error } = this.props
        let template

        if (name !== '') {
            template = <p>{name}</p>
        } else {

            template = <button className='btn' onClick={this.props.handleLogin}>Войти</button>
        }

        return <div className='ib user'>
            {template}
            {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
        </div>
    }
}

Chat.propTypes = {
    name: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
}