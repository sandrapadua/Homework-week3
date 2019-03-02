import * as React from 'react'
import PropTypes from 'prop-types'

ModelDetails.propTypes = {
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired
  }
  
export default function ModelDetails(props) {
  return (<div>
      <ul>
        <li>Name: {props.name}</li>
        <li>Manufacturer: {props.manufacturer}</li>
        <li>Year: {props.year}</li>
        <li>Origin: {props.origin}</li>
      </ul>
  </div>)
}

