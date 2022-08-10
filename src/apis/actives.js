import request from './index'

export function fetchList() {
    return request({
        url: '/actives',
    })
}

export function fetch(id) {
    return request({
        url: `/actives/${id}`,
    })
}