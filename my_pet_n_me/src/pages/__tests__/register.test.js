/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Register from '../Register'


describe('Register Component Testings', () => {

    test('Testing Render Register', () => {
        render(<Register/>)
        const registerElement = screen.getByTestId('main-react')
        expect(registerElement).toBeInTheDocument()
    })

})

