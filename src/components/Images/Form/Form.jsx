import { useState } from 'react';
import Button from '../../Button/Button';
import PropTypes from 'prop-types';
const INITIAL_STATE = {
  search: '',
  name: '',
};
const Form = ({ onSubmit }) => {
  const [state, setState] = useState({
    ...INITIAL_STATE,
  });

  const handleChangeInput = ({ target }) => {
    const { id, value, checked, type } = target;

    setState(prevState => {
      return { ...prevState, [id]: type === 'checkbox' ? checked : value };
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };
  const { search, name } = state;
  return (
    <form onSubmit={handleSubmitForm}>
      <Button type="submit" disabled={!search.trim()}>
        Search
      </Button>
      <input
        id="search"
        type="text"
        value={search}
        placeholder="search"
        onChange={handleChangeInput}
      />
    </form>
  );
};
// class Form extends Component {
//   state = {
//     search: '',
//   };

// handleSubmit = e => {
//   const { search } = this.state;
//   e.preventDefault();

//   const { onSubmit } = this.props;
//   onSubmit(search);
//   this.reset();
// };
// handleChange = ({ target: { value } }) => {
//   this.setState({ search: value });
// };
// reset = () => {
//   this.setState({ search: '' });
// };

//   render() {
// const { search } = this.state;
// return (
//   <form onSubmit={this.handleSubmit}>
//     <Button type="submit" disabled={!search.trim()}>
//       Search
//     </Button>
//     <input
//       type="text"
//       value={search}
//       placeholder="search"
//       onChange={this.handleChange}
//     />
//   </form>
// );
//   }
// }
export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
