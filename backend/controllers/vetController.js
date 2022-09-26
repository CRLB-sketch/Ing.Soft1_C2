/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* @jest-enviroment jsdom */

const asyncHandler = require('express-async-handler')

const Vet = require('../models/vetModel')

// @desc    Get vets info (Only Vet Verified)
// @route   GET /api/vets
// @access  Public
const getVets = asyncHandler(async (req, res) => {
    console.log('VETS')
    const vets = await Vet.find({ verified: true })
    res.status(200).json({ success: true, data: vets })
})

// @desc    Get vets info (All The Vets Verified & No Verified)
// @route   GET /api/vets
// @access  Public
const getAllVets = asyncHandler(async (req, res) => {
    console.log('ALL VETS')
    const vets = await Vet.find()
    res.status(200).json({ success: true, data: vets })
})

// @desc    Set vet info
// @route   POST /api/vets
// @access  Private
const setVetinfo = asyncHandler(async (req, res) => {
    console.log('SET VET INFO')

    const information = []

    const infoEmpty = (infor) => {
        return /^\s*$/.test(infor.value)
    }

    const isNumber = (theNumber) => {
        if (undefined === theNumber || null === theNumber) {
            return false
        }
        if (typeof theNumber == 'number') {
            return true
        }
        return false
    }

    if (!req.body.name || infoEmpty(req.body.name))
        information.push('Nombre de la Vet')
    if (!req.body.direction || infoEmpty(req.body.direction['city']))
        information.push('Ciudad donde esta la Vet')
    if (!req.body.direction || infoEmpty(req.body.direction['zone']))
        information.push('Zona de la Vet')
    if (!req.body.direction || infoEmpty(req.body.direction['address']))
        information.push('Direccion de la Vet')
    if (!req.body.email || infoEmpty(req.body.email))
        information.push('Email de la Vet')
    if (req.body.services.length === 0) information.push('No hay servicios')
    if (!req.body.lat || infoEmpty(req.body.lat) || !isNumber(req.body.lat))
        information.push('Latitud ingresada esta vacio o no es un numero')
    if (!req.body.long || infoEmpty(req.body.long) || !isNumber(req.body.long))
        information.push('Longitud ingresada esta vacio o no es un numero')
    if (!req.body.phone || infoEmpty(req.body.phone))
        information.push('Telefono de la Vet')
    if (!req.body.emergency || infoEmpty(req.body.emergency))
        information.push('Tipo de emergencia de la Vet')
    if (!req.body.open_time || infoEmpty(req.body.open_time))
        information.push('Horario cuando abre la vet')
    if (!req.body.close_time || infoEmpty(req.body.close_time))
        information.push('Horario cuando cierra la vet')

    if (information.length !== 0) {
        res.status(400)
        const info = information.map((i) => i + '\n')
        throw new Error('Faltaron los siguientes campos a llenar: \n' + info)
    }

    const vet = await Vet.create({
        name: req.body.name,
        direction: req.body.direction,
        email: req.body.email,
        services: req.body.services,
        long: req.body.long,
        lat: req.body.lat,
        phone: req.body.phone,
        open_time: req.body.open_time,
        close_time: req.body.close_time,
        verified: false,
    })

    res.status(200).json({ success: true })
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
    vetsFilter,
    setVetinfo,
    updateVetinfo,
    deleteVetinfo,
}
