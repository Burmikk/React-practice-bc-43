import axios from 'axios';

export const getImages = (page, q) => {
  const params = {
    _limit: 12,
    _page: page,
  };
  if (q) {
    params.q = q;
  }
  return axios.get('https://jsonplaceholder.typicode.com/photos', { params });
};
