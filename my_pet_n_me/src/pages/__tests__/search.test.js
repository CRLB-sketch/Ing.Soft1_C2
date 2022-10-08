/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
* @jest-enviroment jsdom
*/
import { render, screen } from '@testing-library/react'
import React from 'react'
import Search from '../Search'

describe('Search app component testings', () => {

    test('Testing API\'s conecction and displaying vets info' , async () => {
        render(<Search/>)
        const displayedVetInfo = screen.getAllByRole('option')
        expect(displayedVetInfo.length).toBeGreaterThan(1)
    })

    test('Testing pagination' , async () => {
        render(<Search/>)
        const displayedVetInfo = screen.getAllByRole('option')
        expect(displayedVetInfo.length).toBeLessThanOrEqual(16)
    })
    test('Testing Amount Labels of Filter Vets', async () => {
        render(<Search />)
        const displayedVetInfo = screen.getAllByRole('label')
        expect(displayedVetInfo.length).toBeGreaterThan(3)
    })

    test('Testing Render Search Component ', () => {
        render(<Search />)
        const displayedVetInfo = screen.getByTestId('search-component')
        expect(displayedVetInfo).toBeInTheDocument()
    })

})