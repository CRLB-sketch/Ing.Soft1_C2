/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import VetPopup from '../VetPopup'

/**
* @jest-enviroment jsdom
*/

/* eslint-disable linebreak-style */
describe('Vet Popup Component Testings', () => {
    
    test('Testing Render The Vet Popup', () => {
        const funExample = () => {}
        const vetExample = {
            'name':'hola', 'email':'elcorreo', 'phone':'7777-7777',
            'direction':{'city':'laciudad', 'zone':'51', 'address':'desconocido'}
        }
        render(<VetPopup vet={vetExample} regretOriginal={funExample}/>)
        const infoElement = screen.getByTestId('vet-popup-react')
        expect(infoElement).toBeInTheDocument()
    })
})
