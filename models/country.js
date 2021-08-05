import mongoose from 'mongoose'

const Schema = mongoose.Schema

const countrySchema = Schema({
    name: {type: String},
    countryCode: {type: String},
    img: {type: String},
    currency: {type: String},
    exchangeRate: {type: Number},
    continent: {type: String},
    region: {type: String},
    languages: {type: [String]}
}, {
    timestamps: true
})

const Country = mongoose.model('Country', countrySchema)

export {
    Country
}