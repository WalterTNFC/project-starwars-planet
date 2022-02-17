import React, { useContext, useState } from 'react';
import StarWarsPlanetContext from '../context/starWarsPlanetContext';

export default function Inputs() {
  const COLUNAS = ['population', 'orbital_period',
    'diameter',
    'rotation_period', 'surface_water'];
  const COLUMN_SIZE = 4;
  const { data, filterName, setFilterName,
    filterByNumericValues, setFiltroNumero,
    filterDone, setFilterDone } = useContext(StarWarsPlanetContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueNumber, setValue] = useState(0);
  const [columnArr, setcolumnArr] = useState(COLUNAS);

  const handleChange = ({ target }) => setFilterName(target.value);

  const filterNumeric = (array) => {
    array.forEach((filtro) => {
      const filterNumber = filterDone
        .filter((item) => {
          if (filtro.comparison === 'maior que') {
            return Number(item[filtro.column]) > Number(filtro.value);
          } if (filtro.comparison === 'menor que') {
            return Number(item[filtro.column]) < Number(filtro.value);
          }
          return Number(item[filtro.column]) === Number(filtro.value);
        });
      setFilterDone(filterNumber);
    });
  };
  const updateInputFilter = (param, filter) => {
    // console.log(param);
    param.forEach((filtro) => {
      const filtroArr = filter.filter((columnItem) => filtro.column !== columnItem);
      // console.log(filtroArr);
      setcolumnArr(filtroArr);
      setColumn(filtroArr[0]);
    });
  };

  const handleClick = () => {
    if (filterByNumericValues.length <= COLUMN_SIZE) {
      const filtros = [...filterByNumericValues,
        { column, comparison, value: valueNumber }];

      setFiltroNumero(filtros);
      filterNumeric(filtros);
      updateInputFilter(filtros, columnArr);
    }
  };

  const deleteFilter = ({ target: { id } }) => {
    const updateFilters = filterByNumericValues.filter((item) => item.column !== id);
    const newColumns = [...columnArr, id];
    setFiltroNumero(updateFilters);
    if (updateFilters.length === 0) {
      return setFilterDone(data);
    }

    filterNumeric(updateFilters);
    setcolumnArr(newColumns); // A opção retorna pro input.
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ filterName }
        onChange={ (e) => handleChange(e) }
      />
      <label htmlFor="column">
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
          id="column"
          value={ column }
        >
          {columnArr.map((item, index) => (
            <option
              value={ item }
              key={ item + index }
            >
              {item}
            </option>
          )) }
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
          data-testid="comparison-filter"
          id="comparison"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Filtro Número
        <input
          id="value-filter"
          data-testid="value-filter"
          type="number"
          value={ valueNumber }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Adicionar Filtro
      </button>
      {filterByNumericValues.length > 0 && filterByNumericValues.map((item, index) => (
        <div data-testid="filter" key={ item.column + index }>
          <span>{`${item.column} ${item.comparison} ${item.value}`}</span>
          <button
            type="button"
            id={ item.column }
            onClick={ (e) => deleteFilter(e) }
          >
            X
          </button>
        </div>
      ))}
    </div>);
}
