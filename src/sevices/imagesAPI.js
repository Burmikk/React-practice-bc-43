import axios from 'axios';

export const getImages = page => {
  return axios.get('https://jsonplaceholder.typicode.com/photos', {
    params: {
      _limit: 12,
      _page: page,
    },
  });
};
