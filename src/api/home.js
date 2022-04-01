import http from '@/libs/http.tools'

export function getHomeData () {
    return http.get('home')
}
