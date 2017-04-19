import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import photos from './photos'


export default combineReducers({
    user,
    photos,
    routing: routerReducer
})