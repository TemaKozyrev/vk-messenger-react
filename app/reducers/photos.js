import {
    LOAD_REQUEST,
    LOAD_SUCCES,
    LOAD_FAIL
} from '../constants/photos'

const initialState = {
    owner: '',
    photos: [],
    error: ''
}

export default function chat(state = initialState, action) {

    switch(action.type) {
        case LOAD_REQUEST:
            return {...state, owner: action.payload}

        case LOAD_SUCCES:
            return { ...state, photos: action.payload.photos, error: '' }

        case LOAD_FAIL:
            return { ...state, owner: '', photos: [], error: action.payload.message }

        default:
            return state
    }
}