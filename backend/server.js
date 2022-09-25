/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
 * @jest-enviroment jsdom
 */

const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

const bodyParser = require('body-parser')
const cors = require('cors')

connectDB()

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/vets', require('./routes/vetsRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
