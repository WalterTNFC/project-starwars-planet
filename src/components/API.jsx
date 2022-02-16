import { useEffect, useContext } from 'react';
import starWarsPlanetContext from '../context/starWarsPlanetContext';

function API() {
  const { setData } = useContext(starWarsPlanetContext);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      // Para preencher a lista:
      setData(results);
    }
    fetchData();
  }, [setData]);

  return null;
}

export default API;
