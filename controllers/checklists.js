import { Checklist } from '../models/checklist.js'

export {
    create,
    index,
}

async function create(req, res) {
    try {
        const checklist = await Checklist.create(req.body);  
        return res.status(201).json(checklist)    
    } catch (err) {
        return res.status(500).json({err: err.message})
    } 
}

async function index(req, res) {
    try {
        
    } catch (error) {

    }
}