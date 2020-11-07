import React from 'react';
import PropTypes from 'prop-types';
import './pokemon.css'

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.pokemon
    return (
    <div  className="pokemon">
      <div>
        <p><strong>{name}</strong></p>
        <p>{type}</p>
        <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        </div>
        )
      }
    }

export default Pokemon;

Pokemon.propTypes = {
  pokemon: PropTypes.shape ({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape ({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string
  }).isRequired,
};

Pokemon.defaultProps = {
  pokemon: {}
};
