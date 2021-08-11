import mongoose from 'mongoose'
const Schema = mongoose.Schema


const checklistSchema = new mongoose.Schema({
    owner: {type: Schema.Types.ObjectId, ref: "Profile"},
    checklistName: {type: String},
    items: {type: [String]},
}, {
    timestamps: true
})

const Checklist = mongoose.model('Checklist', checklistSchema)

export {
  Checklist
}