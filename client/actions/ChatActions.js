import {
    LOAD_REQUEST,
    LOAD_SUCCES,
    LOAD_FAIL
} from '../constants/chat'

function LoadChat(id, dispatch) {
    VK.Api.call('messages.getChat', {chat_id: id},(r) => {
        if (r.response) {
            dispatch({
                type: LOAD_SUCCES,
                payload: { title: r.response.title, users: r.response.users }
            })
        } else {
            dispatch({
                type: LOAD_FAIL,
                error: true,
                payload: new Error('Ошибка загрузки чата')
            })
        }
    })
}

export function getChat(id) {

    return (dispatch) => {
        dispatch({
            type: LOAD_REQUEST,
            payload: id
        })

        LoadChat(id, dispatch)
    }
}