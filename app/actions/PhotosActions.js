import {
    LOAD_REQUEST,
    LOAD_SUCCES,
    LOAD_FAIL
} from '../constants/photos'

function LoadPhotos(owner, dispatch) {
    VK.Api.call('photos.getAll', {owner_id: +owner},(r) => {
        if (r.response) {

            let result = r.response
            result.shift()

            dispatch({
                type: LOAD_SUCCES,
                payload: { photos: result }
            })
        } else {
            dispatch({
                type: LOAD_FAIL,
                error: true,
                payload: new Error('Ошибка загрузки фотографий')
            })
        }
    })
}

export function getPhotos(owner) {

    return (dispatch) => {
        dispatch({
            type: LOAD_REQUEST,
            payload: owner
        })

        LoadPhotos(owner, dispatch)
    }
}