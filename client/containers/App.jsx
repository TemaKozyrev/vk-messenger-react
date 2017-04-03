import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User.jsx'
import Dialog from '../components/Dialog.jsx'
import * as userActions from '../actions/UserActions'
import * as chatActions from '../actions/ChatActions'

class App extends Component {
    render() {
        const {user, chat} = this.props
        const {handleLogin} = this.props.userActions
        const {getChat} = this.props.chatActions

        return <div className='row'>
            <User name={user.name} handleLogin={handleLogin} error={user.error}/>
            <Dialog id={chat.id} getChat={getChat} error={chat.error} title={chat.title} users={chat.users}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        chat: state.chat
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        chatActions: bindActionCreators(chatActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)