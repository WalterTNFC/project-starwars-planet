import React, { useContext } from 'react';
import starWarsPlanetContext from '../context/starWarsPlanetContext';

function Inputs() {
  const { filter, setFilter, setRenderFilter } = useContext(starWarsPlanetContext);

  const handleChange = ({ target: { value } }) => {
    if (value !== '') {
      setRenderFilter(true);
      return setFilter(value);
    }
    setFilter(value);
    return setRenderFilter(false);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ filter }
        onChange={ (event) => handleChange(event) }
      />
    </div>
  );
}

export default Inputs;
