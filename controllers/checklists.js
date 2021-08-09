import { Checklist } from '../models/checklist.js'

export {
    create,
    index,
    show
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
        const checklist = await Checklist.find({})
        return res.status(200).json(checklist)
    } catch (error) {
        return res.status(500).json(error)
    }
}

async function show(req, res) {
    try {
       
    } catch(error){
        
    }
}