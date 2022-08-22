
import React from 'react'
import { Button } from '@chakra-ui/react'


function Pagination({ postsPerPage, totalPosts, paginate}) {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    const styles = {
        pagination: {
          listStyle: 'none',
          display: 'flex'
        },
        btn: {
            margin: '5px'
        }
      }

  return (
    <nav>
        <ul style={styles.pagination}>
            {pageNumbers.map(number => (
                <Button style={styles.btn} colorScheme='teal' variant='outline' size='sm' onClick={() => paginate(number)}>
                    {number}
                </Button>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination