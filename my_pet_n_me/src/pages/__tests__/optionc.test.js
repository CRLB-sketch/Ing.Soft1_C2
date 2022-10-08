/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import OptionComponent from '../components/OptionComponent'

describe('Option Component Testings', () => {
    test('Testing Render Option Component', () => {
        render(
            <OptionComponent
                title={'Hola'}
                message={'El Mensaje'}
                opcion1={'Opcion#1'}
                opcion2={'Opcion#2'}
                opcion3={'Opcion#3'}
                opcion4={'Opcion#4'}
            />
        )
        const registerElement = screen.getByTestId('option-component-test')
        expect(registerElement).toBeInTheDocument()
    })

    test('Testing Render Option Title', () => {
        render(
            <OptionComponent
                title={'Hola'}
                message={'El Mensaje'}
                opcion1={'Opcion#1'}
                opcion2={'Opcion#2'}
                opcion3={'Opcion#3'}
                opcion4={'Opcion#4'}
            />
        )
        const registerElement = screen.getByTestId('title-option-component')
        expect(registerElement).toHaveTextContent('Hola')
    })

    test('Testing Render Option Amount Options', () => {
        render(
            <OptionComponent
                title={'Hola'}
                message={'El Mensaje'}
                opcion1={'Opcion#1'}
                opcion2={'Opcion#2'}
                opcion3={'Opcion#3'}
                opcion4={'Opcion#4'}
            />
        )
        const registerElement = screen.getAllByRole('option')
        expect(registerElement).toBeGreaterThanOrEqual(4)
    })
})
