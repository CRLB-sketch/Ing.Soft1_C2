/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from '../Login'


/**
* @jest-enviroment jsdom
*/
describe('Register component Testings', () => {
    
    test('Testing Render register', () => {
        render(<Login />)
        const infoElement = screen.getByTestId('login-test')
        expect(infoElement).toBeInTheDocument()
        
    })
    test('Testing if there is a Form' , async () => {
        render(<Login/>)
        const loginElement = screen.getAllByRole('form')
        expect(loginElement.length).toBeGreaterThanOrEqual(1)
    })

    test('Testing good amount of divs' , async () => {
        render(<Login/>)
        const loginElement = screen.getAllByRole('div')
        expect(loginElement.length).toBeGreaterThan(1)
    })
})