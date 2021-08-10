import * as tokenService from './tokenService'

export {
    create,
    deleteOne,
    getAll,
    update,
    getTripById,
}

const BASE_URL = '/api/trips/'

async function create(trip){
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

async function getAll(){
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

async function deleteOne(id){
    try {
        await fetch(`${BASE_URL}${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${tokenService.getToken()}`
            }
        }, {mode: 'cors'})
    } catch (error) {
        throw error
    }
}

async function update(trip){
    try{
        const res = await fetch(`${BASE_URL}${trip._id}`, {
            method: 'PUT',
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

async function getTripById (id) {
    try {
        const res = await fetch(`${BASE_URL}${id}`, {
            headers: {
                "Authorization":`Bearer ${tokenService.getToken()}`
            }
        },{ mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}