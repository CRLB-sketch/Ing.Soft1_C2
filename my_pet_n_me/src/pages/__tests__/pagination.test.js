/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Pagination from '../components/Pagination'

describe('Pagination Component Testings', () => {
    test('Testing Render Pagination Component', () => {
        const paginate = (number = {})
        render(
            <Pagination postsPerPage={12} totalPosts={20} paginate={paginate} />
        )
        const paginationElement = screen.getByTestId('paginate-component')
        expect(paginationElement).toBeInTheDocument()
    })
})
