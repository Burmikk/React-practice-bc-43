import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './ContactsForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
  favorite: false,
};

export class ContactsForm extends Component {
  state = { ...INITIAL_STATE };

  handleChangeInput = ({ target }) => {
    const { id, value, checked, type } = target;

    this.setState({
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={this.handleChangeInput}
          id="name"
          type="text"
          value={name}
        />
        <label htmlFor="number">Tel:</label>
        <input
          onChange={this.handleChangeInput}
          id="number"
          type="text"
          value={number}
        />
        <label htmlFor="favorite">Add contact to favorite</label>
        <input
          onChange={this.handleChangeInput}
          type="checkbox"
          id="favorite"
          name="checkbox"
          checked={this.state.favorite}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
