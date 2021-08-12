import * as tokenService from './tokenService'

export {
    index
}

const BASE_URL = '/api/inspirations/'


async function index(){
    try {
        const res = await fetch(BASE_URL, {
            headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
            }
        }, {mode: 'cors'})
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}
