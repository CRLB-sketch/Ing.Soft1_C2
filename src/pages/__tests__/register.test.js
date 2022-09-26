/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import RegisterVet from '../RegisterVet'

/**
* @jest-enviroment jsdom
*/
describe('Register component Testings', () => {
    
    test('Testing Render register', () => {
        // const funExample = () => {}
        // const vetExample = {
        //     'name':'hola', 'email':'elcorreo', 'phone':'7777-7777',
        //     'direction':{'city':'laciudad', 'zone':'51', 'address':'desconocido'}
        // }
        render(<RegisterVet />)
        const infoElement = screen.getByTestId('register-vet')
        expect(infoElement).toBeInTheDocument()
        
    })
})
