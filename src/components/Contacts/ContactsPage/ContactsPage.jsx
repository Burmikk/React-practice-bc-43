// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactList } from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';

const useLocalStorage = (key, initialValue) => {
  return JSON.parse(localStorage.getItem(key)) || initialValue;
};

export const ContactsPage = () => {
  const [contact, setContact] = useState(useLocalStorage('contacts', []));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }, [contact]);

  //   componentDidUpdate(_, prevState) {
  //   if (
  //     JSON.stringify(prevState.contact) !== JSON.stringify(this.state.contact)
  //   ) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contact));
  //   }
  // }

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts?.length > 0) {
  //     this.setState({ contact: contacts });
  //   }
  // }

  const addContact = data => {
    const isDublicateNumber = contact.find(
      ({ number }) => number === data.number
    );

    if (isDublicateNumber) {
      return alert(` ${data.number} is already exists`);
    }

    const newContact = { ...data, id: nanoid(2) };

    setContact(prevState => {
      return [...prevState, newContact];
    });
  };

  const handleRemove = id => {
    setContact(prevState => {
      const newState = prevState.filter(item => item.id !== id);
      return newState;
    });
  };

  const onFilter = e => {
    setFilter(e.target.value);
  };

  const filterSearch = () => {
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

  return (
    <>
      <ContactsForm onSubmit={addContact} />

      {contact.length !== 0 && (
        <>
          <ContactsFilter filter={filter} onFilter={onFilter} />
          <ContactList list={filterSearch()} remove={handleRemove} />
        </>
      )}
    </>
  );
};

// export class ContactsPage extends Component {
//   state = {
//     contact: [],
//     filter: '',
//   };

// componentDidUpdate(_, prevState) {
//   if (
//     JSON.stringify(prevState.contact) !== JSON.stringify(this.state.contact)
//   ) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contact));
//   }
// }

// componentDidMount() {
//   const contacts = JSON.parse(localStorage.getItem('contacts'));
//   if (contacts?.length > 0) {
//     this.setState({ contact: contacts });
//   }
// }

//   addContact = data => {
//     console.log(data);
//     const isDublicateNumber = this.state.contact.find(
//       ({ number }) => number === data.number
//     );

//     if (isDublicateNumber) {
//       return alert(` ${data.number} is already exists`);
//     }

//     const newContact = { ...data, id: nanoid(2) };

//     this.setState(prevState => {
//       return {
//         contact: [...prevState.contact, newContact],
//       };
//     });
//   };

//   handleRemove = id => {
//     this.setState(prevState => {
//       const newState = prevState.contact.filter(item => item.id !== id);
//       return { contact: newState };
//     });
//   };

// onFilter = e => {
//   this.setState({
//     filter: e.target.value,
//   });
// };

// filterSearch = () => {
//   const { contact, filter } = this.state;
//   if (!filter) {
//     return contact;
//   }

//   const newContacts = contact.filter(
//     ({ name, number }) =>
//       name.toLowerCase().includes(filter.toLowerCase()) ||
//       number.includes(filter)
//   );
//   return newContacts;
// };

//   render() {
//     const filteredList = this.filterSearch();

//     return (
//       <>
//         <ContactsForm addContact={this.addContact} />

//         {this.state.contact.length !== 0 && (
//           <>
//             <ContactsFilter
//               filter={this.state.filter}
//               onFilter={this.onFilter}
//             />
//             <ContactList list={filteredList} remove={this.handleRemove} />
//           </>
//         )}
//       </>
//     );
//   }
// }
