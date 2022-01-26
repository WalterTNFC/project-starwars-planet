import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsPlanetContext from './starWarsPlanetContext';

function StarWarsProvider({ children }) {
  const [data, setPlanet] = useState([]);

  return (
    <starWarsPlanetContext.Provider value={ { data, setPlanet } }>
      {children}
    </starWarsPlanetContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default StarWarsProvider;
