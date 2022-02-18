import PropTypes from 'prop-types';
import React, { useState } from 'react';
import StarWarsPlanetContext from './starWarsPlanetContext';

export default function StarProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filtroNumero, setFiltroNumero] = useState([]);
  const [filterDone, setFilterDone] = useState([]);

  const [columnOrganize, setColumnOrganize] = useState('name');
  const [sortOrganize, setSortOrganize] = useState('ASC');
  const context = {
    data,
    setData,
    filterName,
    setFilterName,
    filterByNumericValues: filtroNumero,
    setFiltroNumero,
    filterDone,
    setFilterDone,
    order: {
      column: columnOrganize,
      sort: sortOrganize,
    },
    setColumnOrganize,
    setSortOrganize,
  };

  return (
    <StarWarsPlanetContext.Provider value={ context }>
      {children}
    </StarWarsPlanetContext.Provider>
  );
}
StarProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;
