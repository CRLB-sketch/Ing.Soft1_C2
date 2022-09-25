/* eslint-disable no-undef */
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
const { protect } = require('../middleware/authMiddleware')


router.get('/', getVets)
router.post('/', protect, setVetinfo)
router.put('/:id', updateVetinfo)
router.delete('/:id', deleteVetinfo)

router.get('/get_all_vets', getAllVets)
router.post('/apply_changues', vetsFilter)

module.exports = router
