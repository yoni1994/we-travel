import mongoose from 'mongoose'
const Schema = mongoose.Schema

const addressSchema = new Schema({
  city: {type: String},
  state: {type: String},
  zip_code: {type: Number},
}, {timeStamps: true})

const activitySchema = new Schema({
  name: String,
  location: String,
  address: addressSchema,
  info: String,
  cost: Number,
  budgetCategory: {type: String, enum: ['travel', 'lodging', 'food', 'activities', 'misc']},
  date: Date,
  attendees: [{type: Schema.Types.ObjectId, 'ref': "Profile"}],
  owner: {type: Schema.Types.ObjectId, 'ref': "Profile"},
  isKeyActivity: Boolean
}, {timeStamps: true})

const Activity = mongoose.model('Activity', activitySchema)

export {
  Activity
}