import {
    LOAD_REQUEST,
    LOAD_SUCCES,
    LOAD_FAIL
} from '../constants/chat'

const initialState = {
    id: '',
    title: '',
    users: [],
    error: ''
}

export default function chat(state = initialState, action) {

    switch(action.type) {
        case LOAD_REQUEST:
            return {...state, id: action.payload}

        case LOAD_SUCCES:
            return { ...state, title: action.payload.title, users: action.payload.users, error: '' }

        case LOAD_FAIL:
            return { ...state, id: '', title: '', users: [], error: action.payload.message }

        default:
            return state
    }
}