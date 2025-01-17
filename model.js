const mongoose = require('mongoose')
const Koder = mongoose.model('mongoExpress', new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    lastName: {
        type: String,
        required: false,
        maxLength: 100,
    },
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    },
    birthDate: {
        type: Date,
        required: false,

    },
    generation: {
        type: Number,
        min: 1,
        max: 100,
        required: false,
    }

}))

module.exports = Koder