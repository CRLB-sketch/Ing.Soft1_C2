import React from 'react'
import PropTypes from 'prop-types'
/* eslint-disable linebreak-style */
import { Image, Stack } from '@chakra-ui/react'
import '../../styles/search.css'

const CardComponent = ({ vet, image, setSeePopup, setSelectedVet }) => {
    const handleClick = () => {
        setSeePopup(true)
        setSelectedVet(vet)
    }

    return (
        <div className="CardCont" onClick={handleClick}>
            <Stack align="center">
                <Image
                    className="imgS"
                    borderRadius="10px"
                    boxSize="150px"
                    objectFit="cover"
                    src={image}
                    alt="Foto Veterinaria"
                />
                <a>
                    <b>{vet['name']}</b>
                </a>
            </Stack>
        </div>
    )
}

CardComponent.propTypes = {
    vet: PropTypes.object,
    image: PropTypes.string,
    setSeePopup: PropTypes.func,
    setSelectedVet: PropTypes.func,
}

export default CardComponent
