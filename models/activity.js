import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Activity
}

const addressSchema = new Schema({
    city: String,
    state: String,
    zip_code: Number,
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