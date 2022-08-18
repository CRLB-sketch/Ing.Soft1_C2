const asyncHandler = require('express-async-handler')

const Vet = require('../models/vetModel')

// @desc    Get vets info
// @route   GET /api/vets
// @access  Public
const getVets = asyncHandler(async(req, res) => {
    const vets = await Vet.find()
    res.status(200).json(vets)

})

// @desc    Set vet info
// @route   POST /api/vets
// @access  Private
const setVetinfo = asyncHandler (async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const vet = await Vet.create({
        text: req.body.text
    })

    res.status(200).json(vet)
})


// @desc    Update vet info
// @route   PUT /api/vets/:id
// @access  Private
const updateVetinfo = asyncHandler( async(req, res) => {

    const vet = await Vet.findById(req.params.id)

    if(!vet) {
        res.status(400)
        throw new Error('Vet not found')
    }

    const updatedVet = await Vet.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedVet)
})


// @desc    Delete vet info
// @route   DELETE /api/vets:id
// @access  Private
const deleteVetinfo = asyncHandler( async(req, res) => {

    const vet = await Vet.findById(req.params.id)

    if(!vet) {
        res.status(400)
        throw new Error('Vet not found')
    }

    await vet.remove()

    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getVets,
    setVetinfo,
    updateVetinfo,
    deleteVetinfo
}