import React, { useState } from 'react';
import PropTypes from 'prop-types';
import starWarsPlanetContext from './starWarsPlanetContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [renderFilter, setRenderFilter] = useState(false);

  const context = { data, setData, filter, setFilter, renderFilter, setRenderFilter };

  return (
    <starWarsPlanetContext.Provider value={ context }>
      {children}
    </starWarsPlanetContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.shape.isRequired,
};

export default StarWarsProvider;
