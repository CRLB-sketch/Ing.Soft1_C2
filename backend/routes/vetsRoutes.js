/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const {
    getVets,
    getAllVets,
    getVetData,
    setVetinfo,
    updateVetinfo,
    deleteVetinfo,
    vetsFilter,
} = require('../controllers/vetController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', getVets)
router.get('/vetdata', protect, getVetData)
router.post('/', protect, setVetinfo)
router.put('/:id', protect, updateVetinfo)
router.delete('/:id', protect, deleteVetinfo)

router.get('/get_all_vets', getAllVets)
router.post('/apply_changues', vetsFilter)

module.exports = router
