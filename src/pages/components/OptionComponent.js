import React from 'react'
import PropTypes from 'prop-types'

import { Select } from '@chakra-ui/react'
import '../../styles/search.css'

const OptionComponent = ({
    title,
    message,
    opcion1,
    opcion2,
    opcion3,
    opcion4,
}) => {
    const colors = {
        fondo: 'rgb(223 225 225)',
        verde: 'rgb(174 213 142)',
        white: 'rgb(181 142 213)',
        naranja: 'rgb(37, 150, 190)',
        verde2: '#97db75',
        verde3: '#ace291',
        verde4: '#b6e69e',
    }

    return (
        <div className="SearchOuterContainer2">
            <h1>{title}</h1>
            <Select placeholder={message} focusBorderColor={colors.verde}>
                <option value="option1">{opcion1}</option>
                <option value="option2">{opcion2}</option>
                <option value="option3">{opcion3}</option>
                <option value="option4">{opcion4}</option>
            </Select>
        </div>
    )
}

OptionComponent.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    opcion1: PropTypes.string,
    opcion2: PropTypes.string,
    opcion3: PropTypes.string,
    opcion4: PropTypes.string,
}

export default OptionComponent
