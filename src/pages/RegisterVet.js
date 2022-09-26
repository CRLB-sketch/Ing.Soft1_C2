import React, { useState } from 'react'
import InputComponent from './components/InputComponent'
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


import HeaderComponent from './components/HeaderComponent'

// Librerias para usar el Mapa
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet'
// import CurrentLocation from './components/CurrentLocation'
// import {  MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet'
// import { useEffect } from 'react'
// import L from 'leaflet'



const RegisterVet = () => {
    const [nombre, setNombre] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [zona, setZona] = useState('')
    const [direccion, setDireccion] = useState('')
    const [correo, setCorreo] = useState('')
    const [dicServices, setDicServices] = useState({})
    const [telefono, setTelefono] = useState('')
    const [emergencia, setEmergencia] = useState('')
    const [apertura, setApertura] = useState('')
    const [cierre, setCierre] = useState('')
    const [position, setPosition] = useState(null)

    const LocateMarker = () => {
        // Métodos para obtener la ubicacion
        const map = useMapEvents({
            click(e) {
                map.locate()
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : <Marker position={position}></Marker>
    }

    const handleAddVet = (event) => {

        event.preventDefault()

        if (isNaN(telefono) && isNaN(zona))
        {
            alert('Debe ingresar solo numeros en telefono y zona.')
        }else{

            const services = []
            for (const [key, value] of Object.entries(dicServices)) {
                console.log(key + ' -+- ' + value)
                if (value === true) {
                    services.push(key)
                }
            }

            if (services.length === 0) {
                alert('Porfavor ingrese como mínimo un servicio')
                return
            }

            if (position === null) {
                alert('No has seleccionado una posicion/ubicacion en el mapa')
            }

            fetch('http://localhost:5000/api/vets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nombre,
                    direction: { city: ciudad, zone: zona, address: direccion },
                    email: correo,
                    services: services,
                    lat: position.lat,
                    long: position.lng,
                    phone: telefono,
                    emergency: emergencia,
                    open_time: apertura,
                    close_time: cierre,
                }),
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.success === true) {
                        alert('Se agrego la nueva vet exitosamente')
                    } else {
                        alert(result.message)
                    }
                })
                .catch((error) => {
                    alert('Ocurrio un error inesperado: ' + error)
                })
                .then(() => {
                    window.location.href = '/'
                })
            
        }

        

        
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

    const getTelefono = (telefono) => {
        setTelefono(telefono)
    }

    const handleChange = (event) => setCierre(event.target.value)
    const handleChange2 = (event) => setApertura(event.target.value)

    return (
        <div>
            <HeaderComponent className="header" />
            <div className="provisionalBackgorund">
                <div className="faqCont container">
                    <div className="infoContainer">
                        <div className="titleContainer">
                            <Heading className="title">
                                Formulario para registrar una veterinaria
                            </Heading>
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
                            <h1>
                                Ingresa la ubicacion donde se encuentra la
                                veterinaria
                            </h1>
                            <br></br>
                                                   
                            <MapContainer
                                center={[14.6050635, -90.4893286]}
                                zoom={13}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <LocateMarker />
                            </MapContainer>
                            
                            {position !== null && (
                                <p>
                                    Lat: {position.lat}, Long: {position.lng}{' '}
                                </p>
                            )}

                            <InputComponent
                                getter={getTelefono}
                                title="Teléfono"
                                message="12345678"
                            />
                            <FormControl isRequired> 
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
                            </FormControl>

                            <FormControl isRequired>
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
                            <FormControl isRequired> 
                                <FormLabel>Hora de apertura</FormLabel>
                                <Input
                                    onChange={handleChange2}
                                    title="Hora de apertura"
                                    size="md"
                                    type="time"
                                    focusBorderColor={'rgb(174 213 142)'}
                                />
                            </FormControl>
                            <FormControl isRequired> 
                                <FormLabel>Hora de cierre</FormLabel>
                                <Input
                                    onChange={handleChange}
                                    title="Hora de cierre"
                                    size="md"
                                    type="time"
                                    focusBorderColor={'rgb(174 213 142)'}
                                />
                            </FormControl>
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
