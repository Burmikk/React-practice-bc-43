import axios from 'axios';

export const getImages = () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/photos', {
        params: {
          _limit: 12,
          _page: 1,
        },
      })
  }
