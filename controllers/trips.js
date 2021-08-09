import { Trip } from '../models/trip.js'

export {
    create,
    index
}

async function create(req, res){
    try {
        const trip = await Trip.create(req.body);  
        return res.status(201).json(trip)    
    } catch (err) {
        return res.status(500).json({err: err.message})
    }  
}

async function index(req, res){
    console.log('INDEX CONTROLLER TEST')
}