import { createApi } from 'unsplash-js'
import fetch from 'node-fetch'
URL = require('url').URL;

const BASE_URL = 'https://api.unsplash.com/'
const RANDOM = 'photos/random'

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY

const serverApi = createApi({
    accessKey: UNSPLASH_ACCESS_KEY
})


async function index(req, res){
    
}

export {
    index
}