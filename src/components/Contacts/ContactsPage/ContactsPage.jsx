import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';

export class ContactsPage extends Component {
  state = {
    contact: [],
    filter: '',
  };

  addContact = data => {
    console.log(data);
    const isDublicateNumber = this.state.contact.find(
      ({ number }) => number === data.number
    );

    if (isDublicateNumber) {
      return alert(` ${data.number} is already exists`);
    }

    const newContact = { ...data, id: nanoid(2) };

    this.setState(prevState => {
      return {
        contact: [...prevState.contact, newContact],
      };
    });
  };

  handleRemove = id => {
    this.setState(prevState => {
      const newState = prevState.contact.filter(item => item.id !== id);
      return { contact: newState };
    });
  };

  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterSearch = () => {
    const { contact, filter } = this.state;
    if (!filter) {
      return contact;
    }

    const newContacts = contact.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.includes(filter)
    );
    return newContacts;
  };

  render() {
    const filteredList = this.filterSearch();

    return (
      <>
        <ContactsForm addContact={this.addContact} />

        {this.state.contact.length !== 0 && (
          <>
            <ContactsFilter
              filter={this.state.filter}
              onFilter={this.onFilter}
            />
            <ContactList list={filteredList} remove={this.handleRemove} />
          </>
        )}
      </>
    );
  }
}
