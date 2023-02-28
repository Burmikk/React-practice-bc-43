import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchPeople } from '../../sevices/starWarsHeroesAPI';
export const StarWarsPage = () => {
  const [heroesList, setHeroesList] = useState([]);

  useEffect(() => {
    async function getFetch() {
      try {
        const {
          data: { results },
        } = await searchPeople();
        const arrayWithNames = results.map(item => {
          return item.name;
        });
        console.log(results);
        setHeroesList(prevState => {
          return [...prevState, ...arrayWithNames];
        });
      } catch (error) {
        console.log(error);
      }
    }
    getFetch();
  }, []);

  const elements = heroesList.map((item, index) => {
    return (
      <li key={item}>
        <Link to={`/heroes/${index + 1}`}>{item}</Link>
      </li>
    );
  });

  return (
    <>
      <ul>{elements}</ul>
    </>
  );
};
