const express = require('express')
const router = express.Router()
const { getVets, setVetinfo, updateVetinfo, deleteVetinfo } = require('../controllers/vetController')


router.get('/', getVets)
router.post('/', setVetinfo)
router.put('/:id', updateVetinfo)
router.delete('/:id', deleteVetinfo)

module.exports = router

