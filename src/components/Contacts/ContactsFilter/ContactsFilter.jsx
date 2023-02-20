import PropTypes from 'prop-types';

const ContactsFilter = ({ onFilter, filter }) => {
  return (
    <div>
      <label>filter</label>
      <input onChange={onFilter} type="text" value={filter} />
    </div>
  );
};

export default ContactsFilter;

ContactsFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
