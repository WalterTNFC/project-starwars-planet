import { useEffect, useContext } from 'react';
import starWarsPlanetContext from '../context/starWarsPlanetContext';

function API() {
  const { setPlanet } = useContext(starWarsPlanetContext);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      // Para preencher a lista:
      setPlanet(results);
    }
    fetchData();
  }, [setPlanet]);

  return null;
}

export default API;
