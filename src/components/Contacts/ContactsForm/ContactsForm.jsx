import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import useForm from '../../../shared/hooks/useForm';
import styles from './ContactsForm.module.css';
const INITIAL_STATE = {
  name: '',
  number: '',
  favorite: false,
};
export const ContactsForm = ({ onSubmit }) => {
  // const [state, setState] = useState({
  //   ...INITIAL_STATE,
  // });

  const { handleChangeInput, handleSubmitForm, state } = useForm(
    INITIAL_STATE,
    onSubmit
  );

  const inputRef = useRef();
  const secondRef = useRef();
  useEffect(() => {
    if (state.name) {
      secondRef.current.value = '+380';
    }
    inputRef.current.focus();
  }, [state.name]);

  const { name, number, favorite } = state;

  // const handleChangeInput = ({ target }) => {
  //   const { id, value, checked, type } = target;

  //   setState(prevState => {
  //     return { ...prevState, [id]: type === 'checkbox' ? checked : value };
  //   });
  // };

  // const handleSubmitForm = e => {
  //   e.preventDefault();
  //   onSubmit({ ...state });
  //   reset();
  // };

  // const reset = () => {
  //   setState({ ...INITIAL_STATE });
  // };
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="name">Name:</label>
      <input
        onChange={handleChangeInput}
        id="name"
        type="text"
        value={name}
        ref={inputRef}
      />
      <label htmlFor="number">Tel:</label>
      <input
        onChange={handleChangeInput}
        id="number"
        type="text"
        value={number}
        ref={secondRef}
      />
      <label htmlFor="favorite">Add contact to favorite</label>
      <input
        onChange={handleChangeInput}
        type="checkbox"
        id="favorite"
        name="checkbox"
        checked={favorite}
      />
      <button type="submit" disabled={!name || !number}>
        Add
      </button>
    </form>
  );
};

// const INITIAL_STATE = {
//   name: '',
//   number: '',
//   favorite: false,
// };

// export class ContactsForm extends Component {
//   state = { ...INITIAL_STATE };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form onSubmit={this.handleSubmitForm}>
//         <label htmlFor="name">Name:</label>
//         <input
//           onChange={this.handleChangeInput}
//           id="name"
//           type="text"
//           value={name}
//         />
//         <label htmlFor="number">Tel:</label>
//         <input
//           onChange={this.handleChangeInput}
//           id="number"
//           type="text"
//           value={number}
//         />
//         <label htmlFor="favorite">Add contact to favorite</label>
//         <input
//           onChange={this.handleChangeInput}
//           type="checkbox"
//           id="favorite"
//           name="checkbox"
//           checked={this.state.favorite}
//         />
//         <button type="submit">Add</button>
//       </form>
//     );
//   }
// }

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
