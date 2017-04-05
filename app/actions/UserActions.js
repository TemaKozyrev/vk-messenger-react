import {
    LOGIN_REQUEST,
    LOGIN_SUCCES,
    LOGIN_FAIL,
    FRIENDS_REQUEST,
    FRIENDS_SUCCES
} from '../constants/user'

export function handleLogin() {

    return function (dispatch) {

        dispatch({
            type: LOGIN_REQUEST
        })

        VK.Auth.login((r) => {
            if (r.session) {

                getFriends(r.session.user.id, dispatch)

                dispatch({
                    type: LOGIN_SUCCES,
                    payload: {username: r.session.user.first_name, id: r.session.user.id}
                })


            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации')
                })
            }
        }, 4, 2);
    }
}

function getFriends(id, dispatch) {
    dispatch({
        type: FRIENDS_REQUEST
    })

    VK.Api.call('friends.get', {user_id: +id, fields: 'nickname,photo_100', count: 200}, (r) => {
        dispatch({
            type: FRIENDS_SUCCES,
            payload: {friends: r.response}
        })

    })
}