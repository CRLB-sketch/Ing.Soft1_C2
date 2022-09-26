/* eslint-disable linebreak-style */

import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@chakra-ui/react'

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const styles = {
        pagination: {
            listStyle: 'none',
            display: 'flex',
        },
        btn: {
            margin: '5px',
        },
    }

    return (
        <nav>
            <ul style={styles.pagination}>
                {pageNumbers.map((number) => (
                    <Button
                        key={number}
                        style={styles.btn}
                        colorScheme="teal"
                        variant="outline"
                        size="sm"
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </Button>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    postsPerPage: PropTypes.number,
    totalPosts: PropTypes.number,
    paginate: PropTypes.func,
}

export default Pagination
