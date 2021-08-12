import nodeFetch from 'node-fetch'
import { createApi } from 'unsplash-js'
import { toJSON } from 'flatted';

// import URL from 'url';

// const BASE_URL = 'https://api.unsplash.com/'
// const RANDOM = 'photos/random'

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY

const unsplash = createApi({
    accessKey: UNSPLASH_ACCESS_KEY,
    fetch: nodeFetch
})

// unsplash.photos.getRandom({query: 'Italy', count: 1})
//  .then(json => {
//      console.log(json)
// })

// if(res.type === 'success'){
//     const photo = res.photo
//     unsplash.photos.trackDownload({
//         downloadLocation: photo.links.download_location
//     })
// } else {
//     console.log('error occurred: ', res.errors)
// }



// const controller = new AbortController()
// const signal = controller.signal

// async function getRandomPhoto(){    
//     try {
//     } catch (error) {
//         if(error.name === 'AbortError'){
//             console.log('Fetch aborted')
//         }
//     }
// }

// controller.abort()



async function index(req, res){
    // try {
    //     const response = await fetch(`${BASE_URL}${RANDOM}?query=Italy`, {
  
    //     })
    //     const data = await response.json()
    //     return data
    //  } catch(error){
    //      throw error
    //  }
}

export {
    index
}