import React, { useState } from 'react'
import InputComponent from './components/InputComponent'
import { Heading, Button } from '@chakra-ui/react'
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
    

    const handleAddVet = () => {
        fetch('http://127.0.0.1:8000/api/vets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: nombre,
                ciudad: ciudad,
                zona: zona,
                direccion: direccion,
                correo: correo,
                servicios: servicios,
                latitud: latitud,
                longitud: longitud,
                telefono: telefono,
                emergencia: emergencia,
                tipo: tipo,
                apertura: apertura,
                cierre: cierre,
                verified: false,
            }),

        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    alert('Se agrego el user')
                } else {
                    alert('Error con la solicitud')
                }
            }).catch((error) => {
                alert('Ocurrio un error inesperado: ' + error)
            }).then(() => {
                window.location.href = '/'
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
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

    return (
        <div className="provisionalBackgorund">
            <div className="outerContainer container">
                <div className="infoContainer">
                    <div className="titleContainer">
                        <Heading className="title">Formulario para registrar una veterinaria</Heading>
                    </div>
                    <form onSubmit={handleSubmit}>
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

                        <InputComponent
                            getter={getServicios}
                            title="Servicios"
                            message="Ingresa los servicios que ofreces"
                        />

                        <InputComponent
                            getter={getLatitud}
                            title="Latitud"
                            message="Ingresa la latitud de tu veterinaria"
                        />

                        <InputComponent
                            getter={getLongitud}
                            title="Longitud"
                            message="Ingresa la longitud de tu veterinaria"
                        />

                        <InputComponent
                            getter={getTelefono}
                            title="Teléfono"
                            message="Ingresa el teléfono de tu veterinaria"
                        />

                        <InputComponent
                            getter={getEmergencia}
                            title="Emergencia"
                            message="Atiendes emergencias 24H?"
                        />

                        <InputComponent
                            getter={getTipo}
                            title="Tipo"
                            message="Ingresa el tipo de veterinaria (Tienda, Clinica, Hospital)"
                        />

                        <InputComponent
                            getter={getApertura}
                            title="Apertura"
                            message="Ingresa la hora de apertura"
                        />

                        <InputComponent
                            getter={getCierre}
                            title="Cierre"
                            message="Ingresa la hora de cierre"
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
