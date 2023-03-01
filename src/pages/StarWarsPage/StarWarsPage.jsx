import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchPeople } from '../../sevices/starWarsHeroesAPI';
import Button from '../../components/Button/Button';
export const StarWarsPage = () => {
  const [heroesList, setHeroesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  useEffect(() => {
    async function getFetch() {
      try {
        setLoading(false);
        const {
          data: { results },
        } = await searchPeople(page);
        const arrayWithNames = results.map(item => {
          return item.name;
        });
        setLoading(true);
        console.log(results);
        setHeroesList(prevState =>
          page === 1 ? arrayWithNames : [...prevState, ...arrayWithNames]
        );
      } catch (error) {
        console.log(error);
      }
    }
    getFetch();
  }, [page]);

  const loadMore = () => {
    setSearchParams({
      page: +page + 1,
    });
  };
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
      {loading ? (
        <Button onBtnClick={loadMore}>Load more</Button>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};
