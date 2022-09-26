/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { Input, FormLabel } from '@chakra-ui/react'
import { Heading, Button } from '@chakra-ui/react'
import '../styles/register.css'
import HeaderComponent from './components/HeaderComponent'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const {name, email, password, password2} = formData

    const colors = {
        fondo: 'rgb(223 225 225)',
        verde: 'rgb(174 213 142)',
        white: 'rgb(181 142 213)',
        naranja: 'rgb(37, 150, 190)',
        verde2: '#97db75',
        verde3: '#ace291',
        verde4: '#b6e69e',
    }

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
    
    return (
        <div>        
            <HeaderComponent className="header" />
            <div className="provisionalBackgorund">
                <div className="outerContainer container">
                    <div className="infoContainer">
                        <div className="titleContainer">
                            <Heading className="title">Iniciar Sesión</Heading>
                        </div>
                        <form onSubmit={onSubmit}>

                            <div className="outerContainer2">
                                <FormLabel>{'Nombre'}</FormLabel>
                                <Input
                                    type='text'
                                    value={name}
                                    name='name'
                                    onChange={handleChange}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese su nombre'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Correo'}</FormLabel>
                                <Input
                                    type='text'
                                    value={email}
                                    name='email'
                                    onChange={handleChange}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese su correo'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Contraseña'}</FormLabel>
                                <Input
                                    type='text'
                                    value={password}
                                    name='password'
                                    onChange={handleChange}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese su contraseña'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Confirmar contraseña'}</FormLabel>
                                <Input
                                    type='text'
                                    value={password2}
                                    name='password2'
                                    onChange={handleChange}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese nuevamente su contraseña'}
                                />
                            </div>

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
                                Aceptar
                            </Button>
                        </form>
                        <p className="questionCont">
                            ¿No tienes cuenta?{' '}
                            <a href="./Login>">
                                <b className="highlight">¡Registrate!</b>
                            </a>
                        </p>
                    </div>
                    <div className="innerContainer"></div>
                </div>
            </div>
        </div>
    )
}

export default Register
