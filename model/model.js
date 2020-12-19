const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    number: String
})


modules.exports = new mongoose.model('User', userSchema)