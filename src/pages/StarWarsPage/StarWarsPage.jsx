import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchPeople } from '../../sevices/starWarsHeroesAPI';
import Button from '../../components/Button/Button';
import SearchForm from '../../components/StarWars/SearchForm/SearchForm';

export const StarWarsPage = () => {
  const [heroesList, setHeroesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const search = searchParams.get('search');
  const location = useLocation();
  console.log('🆑  location:', location);

  useEffect(() => {
    async function getFetch() {
      try {
        setLoading(false);
        const {
          data: { results },
        } = await searchPeople(page, search);
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
  }, [page, search]);

  const loadMore = () => {
    setSearchParams({
      search,
      page: +page + 1,
    });
  };

  const handleSubmit = ({ search }) => {
    setSearchParams({ search, page: 1 });
    setHeroesList([]);
  };

  const elements = heroesList.map((item, index) => {
    return (
      <li key={item}>
        <Link to={`/heroes/${index + 1}`} state={{ from: location }}>
          {item}
        </Link>
      </li>
    );
  });

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <ul>{elements}</ul>
      {loading ? (
        <Button onBtnClick={loadMore}>Load more</Button>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};
