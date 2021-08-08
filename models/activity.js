import mongoose from 'mongoose'
const Schema = mongoose.Schema

const addressSchema = new Schema({
  city: {type: String},
  state: {type: String},
  zip_code: {type: Number},
}, {
  timeStamps: true
})

const activitySchema = new Schema({
  name: {type: String},
  location: {type: String},
  address: addressSchema,
  info: {type: String},
  cost: {type: Number},
  budgetCategory: {type: String, enum: ['travel', 'lodging', 'food', 'activities', 'misc']},
  date: {type: Date},
  attendees: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  isKeyActivity: {type: Boolean},
}, {
  timeStamps: true
})

const Activity = mongoose.model('Activity', activitySchema)

export {
  Activity
}