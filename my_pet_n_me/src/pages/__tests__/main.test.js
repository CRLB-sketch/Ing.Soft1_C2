/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from '../Main'

describe('Main Component Testings', () => {

    test('Testing Render Main', () => {
        render(<Main/>)
        const mainElement = screen.getByTestId('main-react')
        expect(mainElement).toBeInTheDocument()
    })

    test('Testing Text of Main', () => {
        render(<Main/>)
        const mainTitle = screen.getByTestId('main-title')
    expect(mainTitle).toHaveTextContent('My Pet & Me')
    })

})