import axios from 'axios';
const starWarsInstance = axios.create({
  baseURL: 'https://swapi.py4e.com/api',
});
export const searchPeople = search => {
  return starWarsInstance.get('/people', {
    params: { search },
  });
};
