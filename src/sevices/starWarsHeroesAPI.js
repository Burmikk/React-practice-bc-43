import axios from 'axios';
const starWarsInstance = axios.create({
  baseURL: 'https://swapi.dev/api',
});
export const searchPeople = page => {
  return starWarsInstance.get('/people', {
    params: {
      page,
    },
  });
};

export const getSingleHero = id => {
  return starWarsInstance.get(`/people/${id}`);
};
