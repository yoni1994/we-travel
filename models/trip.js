import mongoose from 'mongoose'

const Schema = mongoose.Schema

const budgetSchema = Schema({
  amount: {type: Number},
})

const tripSchema = Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  name: {type: String},
  img: {type: String},
  attendees:[{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  budget: budgetSchema,
  country: {type: mongoose.Schema.Types.ObjectId, ref: "Country"},
  date: {type: Date},
  notes: {type: String},
  checklist: [{type: mongoose.Schema.Types.ObjectId, ref: "Checklist"}]
}, {
  timestamps: true,
})

const Trip = mongoose.model('Trip', tripSchema)

export {
  Trip
}

