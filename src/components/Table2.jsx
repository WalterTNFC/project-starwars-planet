import React, { useContext } from 'react';
import starWarsPlanetContext from '../context/starWarsPlanetContext';

export default function Table2() {
  const { data, filter } = useContext(starWarsPlanetContext);
  return (
    <tbody>
      {data.filter((item) => item.name.includes(filter))
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
