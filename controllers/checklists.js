import { Checklist } from '../models/checklist.js'

export {
    create,
    index,
    show,
    update,
    deleteChecklist as delete
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
        const checklist = await Checklist.findById(req.params.id);
        res.status(200).json(checklist);
    } catch(error){
        console.error(error);
        res.status(500).json(error);
    }
}

async function update(req, res) {
    try {
        const checklist = await Checklist.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(checklist);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

async function deleteChecklist(req, res){
    try {
        const checklist = await Checklist.findByIdAndDelete(req.params.id);
        res.status(204).json(checklist);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
    console.log('test delete')
}