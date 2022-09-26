/* eslint-disable linebreak-style */
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/vets'

//Create new goal
const createVet = async (vetsData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, vetsData, config)
    return response.data
}

const vetsService = {
    createVet,
}

export default vetsService