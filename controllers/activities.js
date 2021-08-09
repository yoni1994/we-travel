import { Activity } from '../models/activity.js'

export {
    create
}

async function create(req, res){
    try {
        const activity = await Activity.create(req.body);  
        return res.status(201).json(activity)    
    } catch (err) {
        return res.status(500).json({err: err.message})
    }  
}
