import PropTypes from 'prop-types';
import { ForbesList } from '../ForbesListItem/ForbesList';

export const Forbes = ({ title, list = [] }) => {
  return (
    <div>
      <header>{title && <h2>{title}</h2>}</header>

      <ForbesList list={list} />
    </div>
  );
};

Forbes.propTypes = {
  title: PropTypes.string,
};
