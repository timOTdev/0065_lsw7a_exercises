import React from 'react'
import PropTypes from 'prop-types'

const Car = (props) => {
  return (
    <div className="Car">
      <h1>{props.car.make}</h1>
      <h2>{props.car.model}</h2>
      <h3>{props.car.color}</h3>
    </div>
  )
}

Car.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  })
}

export default Car