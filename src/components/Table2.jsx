import React, { useContext, useEffect } from 'react';
import StarWarsPlanetContext from '../context/starWarsPlanetContext';

export default function TableFilter() {
  const {
    data, filterName, filterDone,
    setFilterDone, order: { column, sort },
  } = useContext(StarWarsPlanetContext);

  useEffect(() => {
    setFilterDone(data.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)));
  }, [data, setFilterDone]);

  const filterOrganizeSort = (a, b) => {
    const sortedOrganized = a[column] - b[column];
    if (sort === 'ASC') {
      return sortedOrganized;
    }
    return -sortedOrganized;
  };

  return (
    <tbody>
      { filterDone.sort(filterOrganizeSort)
        .filter((item) => item.name.includes(filterName))
        .map((item, index) => (
          <tr key={ item.name + index }>
            <td data-testid="planet-name">{item.name}</td>
            <td>{item.rotation_period}</td>
            <td>{item.orbital_period}</td>
            <td>{item.diameter}</td>
            <td>{item.climate}</td>
            <td>{item.gravity}</td>
            <td>{item.terrain}</td>
            <td>{item.surface_water}</td>
            <td>{item.population}</td>
            <td>{item.films}</td>
            <td>{item.created}</td>
            <td>{item.edited}</td>
            <td>{item.url}</td>
          </tr>
        ))}
    </tbody>
  );
}
