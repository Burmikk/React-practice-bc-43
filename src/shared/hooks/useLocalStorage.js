import { array } from 'prop-types';
import { useState, useEffect, useRef } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(
    () => localStorage.getItem(key) ?? initialValue
  );
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;

// if (Array.isArray(JSON?.parse(localStorage.getItem(key)))) {
//     return JSON.parse(localStorage.getItem(key)) ?? initialValue;
//   }
//   return localStorage.getItem(key) ?? initialValue;
// });
// useEffect(() => {
//   localStorage.setItem(key, JSON.stringify(state));
// }, [state, key]);
