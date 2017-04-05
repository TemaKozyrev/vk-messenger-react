import React, { PropTypes, Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

export default class User extends Component {

    render() {
        const { error } = this.props

        const style = {
            margin: 12,
        };

        return <div>
            <RaisedButton label="Войти" primary={true} style={style} onClick={this.props.handleLogin}/>
            {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
        </div>
    }
}

User.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
}