/* eslint-disable linebreak-style */

import React, { useState } from 'react'
import {
    Heading,
    Button,
    CheckboxGroup,
    Checkbox,
    Stack,
    Radio,
    RadioGroup,
    FormControl,
    Select,
    Input,
    FormLabel,
} from '@chakra-ui/react'
import '../styles/form.css'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {createVet } from '../features/vets/vetsSlice'


function RegisterVet () {

    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth)

    const [nombre, setNombre] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [zona, setZona] = useState('')
    const [direccion, setDireccion] = useState('')
    const [correo, setCorreo] = useState('')
    const [dicServices, setDicServices] = useState({})
    const [latitud, setLatitud] = useState('')
    const [longitud, setLongitud] = useState('')
    const [telefono, setTelefono] = useState('')
    const [emergencia, setEmergencia] = useState('')
    const [apertura, setApertura] = useState('')
    const [cierre, setCierre] = useState('')

    const colors = {
        verde: 'rgb(174 213 142)',
    }


    useEffect(() => {
        if(!user){
            navigate('/login')
        }
    }, [user, navigate])

    const dispatch = useDispatch()

    const handleAddVet = (e) => {
        e.preventDefault()
        dispatch(createVet({nombre, 
            ciudad, 
            zona, 
            direccion, 
            correo, 
            dicServices, 
            latitud, 
            longitud,
            emergencia,
            apertura,
            cierre }))

        setCiudad('')
        setZona('')
        setDireccion('')
        setCorreo('')
        setDicServices({})
        setLatitud('')
        setLongitud('')
        setTelefono('')
        setEmergencia('')
        setApertura('')
        setCierre('')
    }

    return (
        <div>
            <div className="provisionalBackgorund">
                <div className="outerContainer container">
                    <div className="infoContainer">
                        <div className="titleContainer">
                            <Heading className="title">
                                Formulario para registrar una veterinaria
                            </Heading>
                        </div>
                        <form onSubmit={handleAddVet}>

                            <div className="outerContainer2">
                                <FormLabel>{'Nombre'}</FormLabel>
                                <Input
                                    type='text'
                                    value={nombre}
                                    name='nombre'
                                    onChange={(e) => setNombre(e.target.value)}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese el nombre del veterinario'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Ciudad'}</FormLabel>
                                <Input
                                    type='text'
                                    value={ciudad}
                                    name='ciudad'
                                    onChange={(e) => setCiudad(e.target.value)}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese la ciudad de la veterinaria'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Zona'}</FormLabel>
                                <Input
                                    type='text'
                                    value={zona}
                                    name='ciudad'
                                    onChange={(e) => setZona(e.target.value)}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese la zona de la veterinaria'}
                                />
                            </div>                            

                            <div className="outerContainer2">
                                <FormLabel>{'Dirección'}</FormLabel>
                                <Input
                                    type='text'
                                    value={direccion}
                                    name='direccion'
                                    onChange={(e) => setDireccion(e.target.value)}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese la direccion de la veterinaria'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Correo'}</FormLabel>
                                <Input
                                    type='text'
                                    value={correo}
                                    name='correo'
                                    onChange={(e) => setCorreo(e.target.value)}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese el correo de la veterinaria'}
                                />
                            </div>

                            <FormLabel>Servicios ofrecidos</FormLabel>
                            <CheckboxGroup
                                colorScheme="orange"
                                defaultValue={['none']}
                            >
                                <Stack spacing={[2, 3]} direction={['column']}>
                                    <Checkbox
                                        value="Vacunacion"
                                        onChange={(e) =>
                                            setDicServices((prevTest) => ({
                                                ...prevTest,
                                                vacunacion: e.target.checked,
                                            }))
                                        }
                                    >
                                        Vacunacion
                                    </Checkbox>
                                    <Checkbox
                                        value="Rayos X"
                                        onChange={(e) =>
                                            setDicServices((prevTest) => ({
                                                ...prevTest,
                                                rayos_x: e.target.checked,
                                            }))
                                        }
                                    >
                                        Rayos X
                                    </Checkbox>
                                    <Checkbox
                                        value="Examenes corporales"
                                        onChange={(e) =>
                                            setDicServices((prevTest) => ({
                                                ...prevTest,
                                                examenes_corporales:
                                                    e.target.checked,
                                            }))
                                        }
                                    >
                                        Examenes corporales
                                    </Checkbox>
                                    <Checkbox
                                        value="Hematologías"
                                        onChange={(e) =>
                                            setDicServices((prevTest) => ({
                                                ...prevTest,
                                                hematologias: e.target.checked,
                                            }))
                                        }
                                    >
                                        Hematologías
                                    </Checkbox>
                                    <Checkbox
                                        value="Hospedaje"
                                        onChange={(e) =>
                                            setDicServices((prevTest) => ({
                                                ...prevTest,
                                                hospedaje: e.target.checked,
                                            }))
                                        }
                                    >
                                        Hospedaje
                                    </Checkbox>
                                    <Checkbox
                                        value="Grooming"
                                        onChange={(e) =>
                                            setDicServices((prevTest) => ({
                                                ...prevTest,
                                                grooming: e.target.checked,
                                            }))
                                        }
                                    >
                                        Grooming
                                    </Checkbox>
                                    <Checkbox
                                        value="Desparacitacion"
                                        onChange={(e) =>
                                            setDicServices((prevTest) => ({
                                                ...prevTest,
                                                desparacitacion:
                                                    e.target.checked,
                                            }))
                                        }
                                    >
                                        Desparacitacion
                                    </Checkbox>
                                    <Checkbox
                                        value="Castraciones"
                                        onChange={(e) =>
                                            setDicServices((prevTest) => ({
                                                ...prevTest,
                                                castraciones: e.target.checked,
                                            }))
                                        }
                                    >
                                        Castraciones
                                    </Checkbox>
                                    <Checkbox
                                        value="Operacion"
                                        onChange={(e) =>
                                            setDicServices((prevTest) => ({
                                                ...prevTest,
                                                operacion: e.target.checked,
                                            }))
                                        }
                                    >
                                        Operacion
                                    </Checkbox>
                                </Stack>
                            </CheckboxGroup>

                            <br></br>

                            <div className="outerContainer2">
                                <FormLabel>{'Latitud'}</FormLabel>
                                <Input
                                    type='number'
                                    value={latitud}
                                    name='latitud'
                                    onChange={(e) => setLatitud(e.target.value)}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese la latitud de la ubicación de la veterinaria'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Longitud'}</FormLabel>
                                <Input
                                    type='number'
                                    value={longitud}
                                    name='longitud'
                                    onChange={(e) => setLongitud(e.target.value)}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese la longitud de la ubicación de la veterinaria'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Teléfono'}</FormLabel>
                                <Input
                                    type='text'
                                    value={telefono}
                                    name='telefono'
                                    onChange={(e) => setTelefono(e.target.value)}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese el teléfono de la veterinaria'}
                                />
                            </div>

                            <FormLabel>Emergencia</FormLabel>
                            <RadioGroup
                                onChange={setEmergencia}
                                value={emergencia}
                            >
                                <Stack direction="row">
                                    <Radio value="true">Si</Radio>
                                    <Radio value="false">No</Radio>
                                </Stack>
                            </RadioGroup>

                            <FormControl>
                                <FormLabel>Tipo de veterinaria</FormLabel>
                                <Select focusBorderColor={'rgb(174 213 142)'}>
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
                                title="Hora de apertura"
                                size="md"
                                type="time"
                                name="apertura"
                                value={apertura}
                                onChange={(event) => setApertura(event.target.value)}
                                focusBorderColor={'rgb(174 213 142)'}
                            />

                            <FormLabel>Hora de cierre</FormLabel>
                            <Input
                                value={cierre}
                                onChange={(event) => setCierre(event.target.value)}
                                title="Hora de cierre"
                                size="md"
                                type="time"
                                name="cierre"
                                focusBorderColor={'rgb(174 213 142)'}
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
        </div>
    )
}

export default RegisterVet
