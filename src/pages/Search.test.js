/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/**
* @jest-enviroment jsdom
*/
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Search from './Search'

describe('Search app component testings', () => {

    test('Testing API\'s conecction and displaying vets info' , async () => {
        render(<Search/>)
        const displayedVetInfo = screen.getAllByRole("option")
        expect(displayedVetInfo.length).toBeGreaterThan(1)
    })
});