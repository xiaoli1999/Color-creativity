import http from '../libs/http.tools'

export function getHomeList () {
    return http.get('creativesketchpad-image/findCreaKetImageAll')
}

export function saveHomeImg (data) {
    return http.post('creativesketchpad-image/updateCreaKetImageById', data)
}

export function getColor (id) {
    return http.get(`creativesketchpad/findCreaKetChpadByImageId?id=${id}`)
}

export function saveColor (data) {
    return http.post('creativesketchpad/updateCreaKetChpadByImageId', data)
}
