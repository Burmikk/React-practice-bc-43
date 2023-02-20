import PropTypes from 'prop-types';

export const ForbesList = ({ list }) => {
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <img src={item.avatar} alt="descr" />
          <p>{item.name}</p>
          <p>{item.capital}</p>
        </li>
      ))}
    </ul>
  );
};

ForbesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      capital: PropTypes.number.isRequired,
    })
  ),
};
