import axios from 'axios';

const pokemonInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  params: {
    limit: 10,
  },
});

export const getPokemons = offset => {
  return pokemonInstance.get('ability/', {
    params: {
      offset,
    },
  });
};

export const getPokemon = () => {
  return pokemonInstance.get('pokemon/pikachu');
};
