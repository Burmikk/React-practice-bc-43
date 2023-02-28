import axios from 'axios';
const starWarsInstance = axios.create({
  baseURL: 'https://swapi.dev/api',
});
export const searchPeople = () => {
  return starWarsInstance.get('/people');
};

export const getSingleHero = id => {
  return starWarsInstance.get(`/people/${id}`);
};
