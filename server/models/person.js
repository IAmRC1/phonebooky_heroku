require('dotenv').config()
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');


mongoose.set('useFindAndModify', false)

const url = process.env.MONGODB_URI

console.log('connecting to the ', url)

mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex:true, 
    useFindAndModify: false, 
  })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'Name can\'t be less than 3 letters'],
    maxlength: [18, 'Name can\'t be more than 18 letters'],
    unique: [true, 'Name already exists'],
    uniqueCaseInsensitive: true
  },
  number: {
    type: Number,
    min: [1000000000, 'Number can\'t be less than 10 digits'],
    max: [9999999999, 'Number can\'t be more than 10 digits'],
    unique: [true, 'Number already exists'],
  },
})
personSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });


personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)