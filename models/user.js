const mongoose = require('mongoose')
//const validator = require('validator')

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    //validate:{
      //validator:validator.isEmail,
    //  message:'{VALUE} is not a valid Email'
    //}
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
