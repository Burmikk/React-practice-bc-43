import { useEffect, useState } from 'react';
import { getPokemons } from '../../sevices/pokemonAPI';
import { getPokemon } from '../../sevices/pokemonAPI';

import Button from '../Button/Button';

export const Pokemon = () => {
  const [ability, setAbility] = useState([]);
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const { data } = await getPokemons(offSet);
        if (data) {
          const resp = await getPokemon();
        }

        setAbility(prevAb => [...prevAb, ...data.results]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPokemonData();
  }, [offSet]);

  const handleLoadMore = () => {
    setOffSet(prevState => prevState + 10);
  };

  const elements = ability.map(item => <li key={item.name}>{item.name}</li>);

  return (
    <>
      <ul>{elements}</ul>
      <Button onBtnClick={handleLoadMore}>Load more</Button>
    </>
  );
};
