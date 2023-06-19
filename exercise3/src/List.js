import React from 'react'
import PropTypes from 'prop-types'
import Car from './Car'

const List = (props) => {
  return (
    <div className="List">
      { props.cars.map(car => <Car key={car.id} car={car} />) }
    </div>
  )
}

List.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object)
}

export default List