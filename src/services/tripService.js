import * as tokenService from './tokenService'

export {
    create,
    deleteOne,
    getAll,
    update,
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
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function deleteOne(){
    try{

    } catch (error) {
        throw error
    }
}

async function update(){
    try{

    } catch (error) {
        throw error
    }
}