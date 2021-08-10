import * as tokenService from './tokenService'

export {
    create,
    getAll,
    deleteOne,
    update,
    getActivityById,
}

const BASE_URL = '/api/activities/'

async function create(activity){
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


async function update(trip, id){
    try{
        const res = await fetch(`${BASE_URL}${id}`, {
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

async function getActivityById(){
    try{

    }
    catch (error) {
        throw error
    }
}