import axios from 'axios';
const starWarsInstance = axios.create({
  baseURL: 'https://swapi.dev/api',
});
export const searchPeople = (page, search) => {
  return starWarsInstance.get('/people', {
    params: {
      page,
      search,
    },
  });
};

export const getSingleHero = id => {
  return starWarsInstance.get(`/people/${id}`);
};
