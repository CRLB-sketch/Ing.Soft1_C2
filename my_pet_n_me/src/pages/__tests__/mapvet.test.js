/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { render, screen } from '@testing-library/react'
import 'leaflet'
import 'react-leaflet'
import '@testing-library/jest-dom/extend-expect'
import MapVet from '../MapVet'

describe('Map Vet Component Testings', () => {
    test('Testing Render Map Vet Page of My Pet And Me', () => {
        render(<MapVet />)
        const mapvetPage = screen.getByTestId('map-vet-page') // Linea 131
        expect(mapvetPage).toBeInTheDocument()
    })
})
