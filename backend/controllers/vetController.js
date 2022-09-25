/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const asyncHandler = require('express-async-handler')

const Vet = require('../models/vetModel')

// @desc    Get vets info (Only Vet Verified)
// @route   GET /api/vets
// @access  Public
const getVets = asyncHandler(async (req, res) => {
    const vets = await Vet.find({ verified: true})
    res.status(200).json({ success: true, data: vets })
})

// @desc    Get vets info (Only Vet Verified)
// @route   GET /api/vets
// @access  Public
const getAllVets = asyncHandler(async (req, res) => {
    const vets = await Vet.find()
    res.status(200).json({ success: true, data: vets })
})


// @desc    Set vet info
// @route   POST /api/vets
// @access  Private
const setVetinfo = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const vet = await Vet.create({
        user: req.user.id,
        name: req.body.name,
        direction: req.body.direction,
        email: req.body.email,
        services: req.body.services,
        long: req.body.long,
        lat: req.body.lat,
        phone: req.body.phone,
        vet_type: req.body.vet_type,
        open_time: req.body.open_time,
        close_time: req.body.close_time,
        verified: true,
    })

    res.status(200).json({ success: true})
})

// @desc    Update vet info
// @route   PUT /api/vets/:id
// @access  Private
const updateVetinfo = asyncHandler(async (req, res) => {
    const vet = await Vet.findById(req.params.id)

    if (!vet) {
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
const deleteVetinfo = asyncHandler(async (req, res) => {
    const vet = await Vet.findById(req.params.id)

    if (!vet) {
        res.status(400)
        throw new Error('Vet not found')
    }

    await vet.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getVets,
    getAllVets,
    setVetinfo,
    updateVetinfo,
    deleteVetinfo,
}
