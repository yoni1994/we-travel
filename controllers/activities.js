import { Activity } from '../models/activity.js'

export {
    create,
    index,
    show,
    update,
}

async function create(req, res) {
    try {
        const activity = await Activity.create(req.body);  
        return res.status(201).json(activity)    
    } catch (err) {
        return res.status(500).json({err: err.message})
    }  
}

async function index(req, res) {
    try {
        const activities = await Activity.find({})
        return res.status(200).json(activities)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function show(req, res) {
    try {
        const activity = await Activity.findById(req.params.id);
        res.status(200).json(activity);
    } catch(error){
        console.error(error);
        res.status(500).json(error);
    }
}

async function update(req, res) {
    try {
        const activity = await Activity.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(activity);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}