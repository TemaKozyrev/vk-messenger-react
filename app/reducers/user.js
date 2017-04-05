import {
    LOGIN_SUCCES,
    LOGIN_FAIL,
    FRIENDS_SUCCES
} from '../constants/user'

const initialState = {
    name: '',
    id: '',
    error: '',
    friends: [],
    load: false
}

export default function token(state = initialState, action) {

    switch(action.type) {
        case LOGIN_SUCCES:
            return { ...state, name: action.payload.username, id: action.payload.id, error: '' }

        case LOGIN_FAIL:
            return { ...state, name: '', id: '', load: false, friends: [], error: action.payload.message }

        case FRIENDS_SUCCES:
            return {...state, friends: action.payload.friends, load: true }

        default:
            return state
    }
}