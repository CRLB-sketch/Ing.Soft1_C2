import React, { useState } from 'react'
import InputComponent from './components/InputComponent'
import { Heading, Button, CheckboxGroup, Checkbox, Stack, NumberInput, Radio, RadioGroup, FormControl, Select, Input, Text, FormLabel } from '@chakra-ui/react'
import '../styles/form.css'

const RegisterVet = () => {
    const [nombre, setNombre] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [zona, setZona] = useState('')
    const [direccion, setDireccion] = useState('')
    const [correo, setCorreo] = useState('')
    const [servicios, setServicios] = useState([])
    const [latitud, setLatitud] = useState('')
    const [longitud, setLongitud] = useState('')
    const [telefono, setTelefono] = useState('')
    const [emergencia, setEmergencia] = useState('')
    const [tipo, setTipo] = useState('')
    const [apertura, setApertura] = useState('')
    const [cierre, setCierre] = useState('')
    

    const handleAddVet = (event) => {
        event.preventDefault()
        console.log(nombre)
        console.log({"city ": ciudad, "zone": zona, "address": direccion})
        console.log(ciudad)
        console.log(zona)
        console.log(direccion)
        console.log(correo)
        console.log(servicios)
        console.log(latitud)
        console.log(longitud)
        console.log(telefono)
        console.log(emergencia)
        console.log(tipo)
        console.log(apertura)
        console.log(cierre)
        // fetch('http://127.0.0.1:8000/api/vets', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         name: nombre,
        //         direction: {city : ciudad, zone : zona, address : direccion},
        //         email: correo,
        //         services: servicios,
        //         lat: latitud,
        //         long: longitud,
        //         phone: telefono,
        //         emergency: emergencia,
        //         vet_type: tipo,
        //         open_time: apertura,
        //         close_time: cierre,
        //         verified: false,
        //     }),

        // })
        //     .then((response) => response.json())
        //     .then((result) => {
        //         if (result.success === true) {
        //             alert('Se agrego el user')
        //         } else {
        //             alert('Error con la solicitud')
        //         }
        //     }).catch((error) => {
        //         alert('Ocurrio un error inesperado: ' + error)
        //     }).then(() => {
        //         window.location.href = '/'
        //     })
    }

    const getNombre = (name) => {
        setNombre(name)
    }

    const getCiudad = (ciudad) => {
        setCiudad(ciudad)
    }

    const getZona = (zona) => {
        setZona(zona)
    }

    const getDireccion = (address) => {
        setDireccion(address)
    }

    const getCorreo = (correo) => {
        setCorreo(correo)
    }

    const getServicios = (servicios) => {
        setServicios(servicios)
    }

    const getLatitud = (latitud) => {
        setLatitud(latitud)
    }

    const getLongitud = (longitud) => {
        setLongitud(longitud)
    }

    const getTelefono = (telefono) => {
        setTelefono(telefono)
    }

    const getEmergencia = (emergencia) => { 
        setEmergencia(emergencia)
    }

    const getTipo = (tipo) => {
        setTipo(tipo)
    }

    const getApertura = (apertura) => {
        setApertura(apertura)
    }

    const getCierre = (cierre) => {
        setCierre(cierre)
    }

    const handleChange = (event) => setCierre(event.target.value)
    const handleChange2 = (event) => setApertura(event.target.value)

    return (
        <div className="provisionalBackgorund">
            <div className="outerContainer container">
                <div className="infoContainer">
                    <div className="titleContainer">
                        <Heading className="title">Formulario para registrar una veterinaria</Heading>
                    </div>
                    <form onSubmit={handleAddVet}>
                        <InputComponent
                            getter={getNombre}
                            title="Nombre"
                            message="Ingresa el nombre del veterinario"
                        />
                        <InputComponent
                            getter={getCiudad}
                            title="Ciudad"
                            message="Ingresa la ciudad de tu veterinaria"
                        />

                        <InputComponent
                            getter={getZona}
                            title="Zona"
                            message="Ingresa la zona de tu veterinaria"
                        />

                        <InputComponent
                            getter={getDireccion}
                            title="Dirección"
                            message="Ingresa la dirección de tu veterinaria"
                        />

                        <InputComponent
                            getter={getCorreo}
                            title="Correo"
                            message="Ingresa tu correo"
                        />

                        <FormLabel>Servicios ofrecidos</FormLabel>
                        <CheckboxGroup colorScheme='orange' defaultValue={['none']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='Vacunacion' onChange={(e) => setServicios([e.target.checked, servicios[0]])}>Vacunacion</Checkbox>
                            <Checkbox value='Rayos X' onChange={(e) => setServicios([e.target.checked, servicios[1]])}>Rayos X</Checkbox>
                            <Checkbox value='Examenes corporales' onChange={(e) => setServicios([e.target.checked], servicios[2])}>Examenes corporales</Checkbox>
                            <Checkbox value='Hematologías'onChange={(e) => setServicios([e.target.checked], servicios[3])}>Hematologías</Checkbox>
                        </Stack>
                        </CheckboxGroup>

                        <br></br>

                        <CheckboxGroup colorScheme='orange ' defaultValue={['none']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='Operaciones' onChange={(e) => setServicios([e.target.checked, servicios[4]])}>Operaciones</Checkbox>
                            <Checkbox value='Estetica y Grooming' onChange={(e) => setServicios([e.target.checked, servicios[5]])}>Estetica y Grooming</Checkbox>
                            <Checkbox value='Farmacia' onChange={(e) => setServicios([e.target.checked, servicios[6]])}>Farmacia</Checkbox>
                            <Checkbox value='Curaciónes' onChange={(e) => setServicios([e.target.checked, servicios[7]])}>Curaciónes</Checkbox>
                        </Stack>
                        </CheckboxGroup>
                        

                        <InputComponent
                            getter={getLatitud}
                            title="Latitud"
                            message="Ingresa el teléfono de tu veterinaria"
                        />

                        <InputComponent
                            getter={getLongitud}
                            title="Longitud"
                            message="Ingresa el teléfono de tu veterinaria"
                        />


                        <InputComponent
                            getter={getTelefono}
                            title="Teléfono"
                            message="Ingresa el teléfono de tu veterinaria"
                        />

                        <FormLabel>Emergencia</FormLabel>
                        <RadioGroup onChange={setEmergencia} value={emergencia}>
                            <Stack direction='row'>
                                <Radio value='true'>Si</Radio>
                                <Radio value='false'>No</Radio>
                            </Stack>
                        </RadioGroup>

                        <FormControl>
                                <FormLabel>Tipo de veterinaria</FormLabel>
                                <Select
                                    focusBorderColor={'rgb(174 213 142)'}
                                    
                                >
                                    <option value="Nada">{'Cualquiera'}</option>
                                    <option value="Normal">{'Normal'}</option>
                                    <option value="Petshop">{'Petshop'}</option>
                                    <option value="Clinica">{'Clinica'}</option>
                                    <option value="Hospital">
                                        {'Hospital'}
                                    </option>
                                </Select>
                            </FormControl>

                        <FormLabel>Hora de apertura</FormLabel>
                        <Input
                            onChange={handleChange2}
                            title="Hora de apertura"
                            size="md"
                            type="time"
                        />

                        <FormLabel>Hora de cierre</FormLabel>
                        <Input
                            onChange={handleChange}
                            title="Hora de cierre"
                            size="md"
                            type="time"
                        />

                        <Button
                            backgroundColor="#ea9a64"
                            _hover="rgb(174 213 142)"
                            _active={{
                                bg: 'rgb(174 213 142)',
                                borderColor: 'rgb(174, 213, 142)',
                            }}
                            color="#fff"
                            type="submit"
                            width="100%"
                            marginTop="10px"
                        >
                            Enviar formulario
                        </Button>
                    </form>

                    <p className="questionCont">
                        {' '}
                        <a href="/">
                            {' '}
                            <b className="highlight">¿Regresar?</b>
                        </a>
                    </p>
                </div>

                <div className="innerContainer"></div>
            </div>
        </div>
    )
}

export default RegisterVet
