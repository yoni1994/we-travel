import { Trip } from '../models/trip.js'

export {
    create,
    index,
    show,
    update,
    deleteTrip as delete
}

async function create(req, res){
    try {
        const trip = await Trip.create(req.body)  
        return res.status(201).json(trip)    
    } catch (error) {
        return res.status(500).json(error)
    }  
}

async function index(req, res){
    try {
        const trips = await Trip.find({})
        return res.status(200).json(trips)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function show(req, res){
    try {
        const trip = await Trip.findById(req.params.id).populate('activities checklists');
        res.status(200).json(trip);
    } catch(error){
        console.error(error);
        res.status(500).json(error);
    }
}

async function update(req, res){
    try {
        const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(trip);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function deleteTrip(req, res){
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);
        res.status(204).json(trip);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}