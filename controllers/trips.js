import { Trip } from '../models/trip.js'

export {
    create,
    index
}

async function create(req, res){
    try {
        const trip = await Trip.create(req.body)  
        return res.status(201).json(trip)    
    } catch (error) {
        return res.status(500).json({error: error.message})
    }  
}

async function index(req, res){
    try {
        const trips = await Trip.find({})
        return res.status(200).json(trips)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}