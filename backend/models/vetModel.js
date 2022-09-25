/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
 * @jest-enviroment jsdom
 */

const mongoose = require('mongoose')

const vetSchema = mongoose.Schema({
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
