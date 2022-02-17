import React, { useContext, useEffect } from 'react';
import StarWarsPlanetContext from '../context/starWarsPlanetContext';

export default function TableFilter() {
  const {
    data, filterName, filterDone, setFilterDone,
  } = useContext(StarWarsPlanetContext);

  useEffect(() => {
    setFilterDone(data);
  }, [data, setFilterDone]);

  return (
    <tbody>
      { filterDone.filter((item) => item.name.includes(filterName))
        .map((item, index) => (
          <tr key={ item.name + index }>
            <td>{item.name}</td>
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
