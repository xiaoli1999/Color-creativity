import http from '../libs/http.tools'

export function getSysinfo () {
    return http.get('sys/info')
}

export function getConfig (type) {
    return http.get(`sys/config/get/${type}`)
}

export function saveConfig (type, data) {
    return http.post(`sys/config/save/${type}`, data)
}

export function getLogList (search) {
    let queryUrl = `Page=${search.Page ? search.Page : 1}`
    queryUrl += `&PageSize=${search.PageSize ? search.PageSize : 15}`
    queryUrl += `&UserId=${search.UserId ? search.UserId : '1000'}`
    if (search.SearchKey) queryUrl += `&SearchKey=${search.SearchKey}`
    return http.get(`sys/logs/${search.LogType ? search.LogType : 'login'}?${queryUrl}`)
}
