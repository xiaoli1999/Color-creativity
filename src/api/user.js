import http from '../libs/http.tools'

export function getUserInfo () {
    return http.get('user/info')
}

export function saveUserInfo (data) {
    return editUser(data)
}

export function changePhone (data) {
    return http.post('user/change_phone', data)
}

export function getLoginRecord () {
    return http.get('user/log')
}

export function passLogin (obj) {
    return http.post('user/login', obj)
}

export function logout () {
    return http.get('user/logout')
}

export function reg (obj) {
    return http.post('user/reg', obj)
}

export function forget (obj) {
    return http.post('user/forget', obj)
}

export function sendSMS (Phone, SMSType) {
    return http.post('user/smscode', { Phone, SMSType })
}

export function getUserList (obj) {
    return http.get(`user/list?Page=${obj.Page}&PageSize=${obj.PageSize}&SearchKey=${obj.SearchKey}&UserGroup=${obj.UserGroup}`)
}

export function addUser (obj) {
    return http.post('user/save', obj)
}

export function editUser (obj) {
    return http.post('user/save', obj)
}

export function delUser (id) {
    return http.get('user/del/' + id)
}

export function removeScope (data) {
    return http.post('user/scope/remove', data)
}

export function addScope (UserId, DeviceType, Tree) {
    return http.post('user/scope/add', {
        UserId, DeviceType, Tree
    })
}
