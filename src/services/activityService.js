import * as tokenService from './tokenService'

export {
    createActivity,
}

const BASE_URL = '/api/activities/'

async function createActivity(activity){
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(activity)
        }, {mode: 'cors'})
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}
