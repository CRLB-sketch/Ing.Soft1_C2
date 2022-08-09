import React, { useState } from 'react'
import InputComponent from './components/InputComponent'
import { Heading, Button } from '@chakra-ui/react'
import '../styles/register.css'

let user_type = 'vet'

const RegisterVet = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [numCol, setNumCol] = useState('')
    const [nombreVet, setNombreVet] = useState('')
    const [direccion, setDireccion] = useState('')
    const [face, setFace] = useState('')
    const [pagina, setPagina] = useState('')

    const handleAddUser = (user_name, email, password, type_user) => {
        fetch('http://127.0.0.1:8000/add_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name: user_name,
                correo: email,
                password: password,
                type_user: type_user,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    alert('Se agrego el user')
                } else {
                    alert('Error con la solicitud')
                }
            })
            .catch((error) => {
                alert('Ocurrio un error inesperado: ' + error)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }

    const getNombre = (name) => {
        setNombre(name)
    }

    const getApellido = (apellido) => {
        setApellido(apellido)
    }
    const getCorreo = (correo) => {
        setCorreo(correo)
    }
    const getNumCol = (numCol) => {
        setNumCol(numCol)
    }

    const getNombreVet = (nombreVet) => {
        setNombreVet(nombreVet)
    }

    const getDireccion = (address) => {
        setDireccion(address)
    }

    const getFace = (face) => {
        setFace(face)
    }

    const getWeb = (url) => {
        setPagina(url)
    }

    return (
        <div className="provisionalBackgorund">
            <div className="outerContainer2 container">
                <div className="infoContainer2">
                    <div className="titleContainer2">
                        <Heading className="title2">Formulario de registro</Heading>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputComponent
                            getter={getNombre}
                            title="Nombre"
                            message="Ingresa tu nombre"
                        />
                        <InputComponent
                            getter={getApellido}
                            title="Apellidos"
                            message="Ingresa tus apellidos"
                        />
                        <InputComponent
                            getter={getCorreo}
                            title="Correo"
                            message="Ingresa tu correo"
                        />
                        <InputComponent
                            getter={getNumCol}
                            title="Numero de colegiado"
                            message="Ingrese su numero de colegiado"
                        />
                        <InputComponent
                            getter={getNombreVet}
                            title="Nombre de la veterinaria"
                            message="Ingresa el nombre de la veterinaria"
                        />
                        <InputComponent
                            getter={getDireccion}
                            title="Dirección de la veterinaria"
                            message="Ingresa la dirección de la veterinaria"
                        />
                        <InputComponent
                            getter={getFace}
                            title="Pagina de Facebook"
                            message="Ingresa la pagina de Facebook de la veterinaria"
                        />
                        <InputComponent
                            getter={getWeb}
                            title="Pagina web"
                            message="Ingresa la pagina web de la veterinaria"
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
                </div>

                <div className="innerContainer"></div>
            </div>
        </div>
    )
}

export default RegisterVet
