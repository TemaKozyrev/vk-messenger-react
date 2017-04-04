import {
    LOGIN_REQUEST,
    LOGIN_SUCCES,
    LOGIN_FAIL
} from '../constants/user'

export function redirect() {

    return function(dispatch) {

        dispatch({
            type: LOGIN_REQUEST
        })

        window.location.replace('https://oauth.vk.com/authorize?client_id=5964528&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=messages&response_type=token&v=5.63&state=123456')
    }

}

export function getToken(url) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_SUCCES,
            payload: id
        })

        LoadChat(id, dispatch)
    }
}