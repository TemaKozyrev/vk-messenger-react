import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../actions/UserActions'

class Login extends Component {
    render() {
        const {hash} = this.props

        return <div className='row'>
                {hash}
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        hash: ownProps.location.hash
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)