import request from '../base'
import axios from 'axios'

/**
 * Simple REST api class
 */
class Resource {
    constructor(uri, auth) {
        this.auth = auth
        this.uri = uri
        if (auth !== undefined)
            request.defaults.headers.common['Authorization'] = `Bearer ${auth}`
    }

    getPage(id, query) {
        return request({
            url: '/' + this.uri + '/' + id,
            method: 'get',
            params: query
        })
    }

    list(query) {
        return request({
            url: '/' + this.uri,
            method: 'get',
            params: query
        })
    }

    get(id) {
        let url = '/' + this.uri;
        if (id !== undefined) url += '/' + id
        return request({
            url: url,
            method: 'get'
        })
    }
}

export {Resource as default}
