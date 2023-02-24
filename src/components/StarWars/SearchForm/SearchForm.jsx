import { set } from 'date-fns';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ search: '' });

  const handelChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handelSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        name="search"
        onChange={handelChange}
        type="text"
        value={state.search}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
