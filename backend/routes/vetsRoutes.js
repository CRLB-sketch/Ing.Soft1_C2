/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
 * @jest-enviroment jsdom
 */

const express = require('express')
const router = express.Router()
const {
    getVets,
    getAllVets,
    setVetinfo,
    updateVetinfo,
    deleteVetinfo,
    vetsFilter,
} = require('../controllers/vetController')

router.get('/', getVets)
router.post('/', setVetinfo)
router.put('/:id', updateVetinfo)
router.delete('/:id', deleteVetinfo)

router.get('/get_all_vets', getAllVets)
router.post('/apply_changues', vetsFilter)

module.exports = router
