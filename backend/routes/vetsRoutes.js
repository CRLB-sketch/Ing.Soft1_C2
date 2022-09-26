/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const {
    getVets,
    getVetData,
    getAllVets,
    setVetinfo,
    updateVetinfo,
    deleteVetinfo,
} = require('../controllers/vetController')
const { protect } = require('../middleware/authMiddleware')


router.get('/', getVets)
router.get('/vetdata', protect, getVetData)
router.post('/', protect, setVetinfo)
router.put('/:id', updateVetinfo)
router.delete('/:id', deleteVetinfo)
router.get('/get_all_vets', getAllVets)

module.exports = router
