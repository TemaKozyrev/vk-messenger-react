import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from './User.jsx'
import PhotoList from './PhotoList.jsx'
import Contacts from './Contacts.jsx'
import * as userActions from '../actions/UserActions'
import * as photosActions from '../actions/PhotosActions'

class Home extends Component {
    render() {
        const {user, photos} = this.props
        const {handleLogin} = this.props.userActions
        const {getPhotos} = this.props.photosActions

        return <div>
            {user.load ? <div className="flex-container"><Contacts id={user.id} friends={user.friends} getPhotos={getPhotos}/><PhotoList error={photos.error} photos={photos.photos} /></div> : <User handleLogin={handleLogin} error={user.error}/>}

        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        photos: state.photos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        photosActions: bindActionCreators(photosActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)