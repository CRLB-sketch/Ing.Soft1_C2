/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Popup: Mostrar los datos específicos de la veterinaria seleccionada
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

import React from 'react'
import PropTypes from 'prop-types'

import '../styles/popup.css'
import { Avatar } from '@chakra-ui/react'
import { Skeleton } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

const VetPopup = ({ vet, regretOriginal }) => {
    return (
        <div data-testid={'vet-popup-react'}>
            <button onClick={() => regretOriginal(false)}>REGRESAR</button>
            <div className="body-a">
                <div className="vet-container">
                    <Avatar
                        size="2xl"
                        name="Dan Abrahmov"
                        src="https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg"
                    />
                    <div className="info">
                        <h1>{vet['name']}</h1>
                        <Divider orientation="horizontal" />
                        <h1>Correo: {vet['email']}</h1>
                        <Divider orientation="horizontal" />
                        <h1>Número de telefono: {vet['phone']}</h1>
                        <Divider orientation="horizontal" />
                        <h1>
                            Dirección: {vet['direction']['city']} -{' '}
                            {vet['direction']['zone']} -{' '}
                            {vet['direction']['address']}
                        </h1>
                    </div>
                    <button className="emBtn">Ir allí</button>
                    <Skeleton height="20px" />
                </div>
            </div>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>My Pet & My</h4>
                                        <span>Universidad del Valle</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Ingeniería de Software</h4>
                                        <span>9876543210 0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Contactanos</h4>
                                        <span>correol@ejemplo.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo"></div>

                                    <div className="subscribe-form">
                                        <form action="#"></form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left"></div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

VetPopup.propTypes = {
    vet: PropTypes.object,
    regretOriginal: PropTypes.func,
}

export default VetPopup
