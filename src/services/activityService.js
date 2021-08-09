import * as tokenService from './tokenService'

export {
    create,
    getAll,
    getOne,
    update,
    deleteOne
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
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function getOne(){
    try{

    }
    catch (error) {
        throw error
    }
}

async function update(){
    try{

    }
    catch (error) {
        throw error
    }
}

async function deleteOne(){
    try{

    }
    catch (error) {
        throw error
    }
}