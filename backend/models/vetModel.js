/* eslint-disable no-undef */
const mongoose = require('mongoose')

const vetSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
    },
    direction: {
        type: Object,
    },
    email: {
        type: String,
    },
    services: {
        type: Array,
    },
    long: {
        type: Number,
    },
    lat: {
        type: Number,
    },
    phone: {
        type: String,
    },
    emergency: {
        type: Boolean,
    },
    open_time: {
        type: String,
    },
    close_time: {
        type: String,
    },
    verified: {
        type: Boolean,
    },
})

module.exports = mongoose.model('Vet', vetSchema)
