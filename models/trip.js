import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = Schema({
  amount: Number
})

const tripSchema = Schema({
  name: {type: String},
  img: {type: String},
  attendees:[{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  budget: budgetSchema,
  country: {type: mongoose.Schema.Types.ObjectId, ref: "Country"},
  date: Date,
  notes: String,
  checklist: [{type: mongoose.Schema.Types.ObjectId, ref: "Checklist"}]
}, {
  timestamps: true,
})

const Trip = mongoose.model('Trip', tripSchema)

export {
  Trip
}

