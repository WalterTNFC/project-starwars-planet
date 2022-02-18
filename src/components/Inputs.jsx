import React, { useContext, useState } from 'react';
import StarWarsPlanetContext from '../context/starWarsPlanetContext';

export default function Inputs() {
  const COLUNAS = ['population', 'orbital_period',
    'diameter',
    'rotation_period', 'surface_water'];
  const COLUMN_SIZE = 4;
  const { data, filterName, setFilterName,
    filterDone, filterByNumericValues, setFiltroNumero,
    setFilterDone,
    columnOrganize, setColumnOrganize,
    setSortOrganize } = useContext(StarWarsPlanetContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueNumber, setValue] = useState(0);
  const [columnArr, setColumnArr] = useState(COLUNAS);

  const handleChange = ({ target }) => setFilterName(target.value);

  const filterNumeric = (array) => {
    setFilterDone(data);
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
    param.forEach((filtro) => {
      const filtroArr = filter.filter((columnItem) => filtro.column !== columnItem);
      setColumnArr(filtroArr);
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
    setColumnArr(newColumns);
    setColumn(newColumns[0]);

    filterNumeric(updateFilters);
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="Filtrar por nome"
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
      <input
        id="value-filter"
        data-testid="value-filter"
        type="number"
        value={ valueNumber }
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        onClick={ handleClick }
        data-testid="button-filter"
        type="button"
      >
        Adicionar Filtro
      </button>
      <div>
        <select
          data-testid="column-sort"
          onChange={ (e) => setColumnOrganize(e.target.value) }
          id="column-organize"
          value={ columnOrganize }
        >
          {COLUNAS.map((item, index) => (
            <option
              key={ item + index }
              value={ item }
            >
              {item}
            </option>
          ))}
        </select>
        <div>
          <label
            data-testid="column-sort-input-asc"
            htmlFor="ascendente"
          >
            <input
              type="radio"
              id="ascendente"
              name="sort"
              value="ASC"
              onClick={ (e) => setSortOrganize(e.target.value) }
            />
            Ascendente
          </label>
          <label
            data-testid="column-sort-input-desc"
            htmlFor="descendente"
          >
            <input
              type="radio"
              id="descendente"
              name="sort"
              value="DESC"
              onClick={ (e) => setSortOrganize(e.target.value) }
            />
            Descendente
          </label>
          <button
            type="button"
            data-testid="column-sort-button"
          >
            Organizar
          </button>
        </div>
      </div>
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
