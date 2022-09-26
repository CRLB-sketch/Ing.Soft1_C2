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
})