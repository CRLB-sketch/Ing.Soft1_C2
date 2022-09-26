/* eslint-disable react/react-in-jsx-scope */
/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Emergency: Mostrar mapa y solicitar que se atienda a la mascota
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

// import '../styles/index.css'
// import PropTypes from 'prop-types'

/* eslint-disable linebreak-style */

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../../features/auth/authSlice'

function HeaderComponent() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <>
            <nav className="header">
                <Link to={'/'}>
                    {' '}
                    <h1 className="logo">
                        <b>My Pet&Me</b>
                    </h1>{' '}
                </Link>

                <ul className="header-right">
                    {user ? 
                    
                        (<>
                            <li className="option btn">
                                <Link to={'/RegisterVet'}>Formulario</Link>
                            </li>

                            <li className="option btn">
                                <button onClick={onLogout}>X</button>
                            </li>
                        </>) : 
                        (<> 
                            <li className="option active btn">
                                <Link to={'/emergency'}>Emergencia</Link>
                            </li>

                            <li className="option btn" data-testid="search">
                                <Link to={'/search'}>Búsqueda</Link>
                            </li>

                            <li className="option btn">
                                <Link to={'/login'}>Iniciar sesión</Link>
                            </li>

                            <li className="option btn">
                                <Link to={'/faq'}>FAQ</Link>
                            </li> 
                        </>)}                   
                </ul>
            </nav>
        </>
    )
}

export default HeaderComponent
