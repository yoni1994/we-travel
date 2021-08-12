import mongoose from 'mongoose'
const Schema = mongoose.Schema


const checklistSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: "Profile"},
    name: {type: String},
    items: {type: [String]},
}, {
    timestamps: true
})

const Checklist = mongoose.model('Checklist', checklistSchema)

export {
  Checklist
}
