import mongoose from 'mongoose'
const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: String
})

const checklistSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: "Profile"},
    name: {type: String},
    items: [itemSchema],
}, {
    timestamps: true
})

const Checklist = mongoose.model('Checklist', checklistSchema)

export {
  Checklist
}
