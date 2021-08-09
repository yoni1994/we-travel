import * as tokenService from './tokenService'

export {
    createTrip,
    getTrips

}

const BASE_URL = '/api/trips/'

async function createTrip(trip){
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(trip)
        }, {mode: 'cors'})
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function getTrips(){
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}