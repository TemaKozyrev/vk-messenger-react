import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Chat from '../components/Chat.jsx'
import * as userActions from '../actions/UserActions'

class App extends Component {
    render() {
        const {user} = this.props
        const {handleLogin} = this.props.userActions

        return <div className='row'>
            <Chat name={user.name} handleLogin={handleLogin} error={user.error}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)