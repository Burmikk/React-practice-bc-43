import { GrFavorite } from 'react-icons/gr';
import PropTypes from 'prop-types';
import pt from 'date-fns/esm/locale/pt/index.js';

export const ContactList = ({ list = [], remove }) => {
  const elements = list.map(item => (
    <li key={item.id}>
      {item.favorite && <GrFavorite />}
      <p>Name:{item.name}</p>
      <p>Number:{item.number}</p>
      <button onClick={() => remove(item.id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  remove: PropTypes.func.isRequired,
};
