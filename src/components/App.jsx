// Core
import { Component } from 'react';

// Utils
import { nanoid } from 'nanoid';

// Styles
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

// Components
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

// Variables
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = contact => {
    const inContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (!inContacts) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: nanoid(), ...contact }],
      }));

      return true;
    }

    alert(`${contact.name} is already added to your contacts`);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilter = () => {
    const { contacts, filter } = this.state;
    const standardizedFiler = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(standardizedFiler)
    );
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const filterList = this.onFilter();
    const { contacts, filter } = this.state;

    return (
      <Layout>
        <h1>Phonebook</h1>

        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>

        {contacts.length > 0 ? (
          <Filter value={filter} onChange={this.onFilterChange} />
        ) : (
          <p style={{ marginTop: 10, color: `#fb6d3a`, fontWeight: 700 }}>
            You have no contacts yet
          </p>
        )}

        <ContactList
          filterList={filterList}
          deleteContact={this.deleteContact}
        />

        <GlobalStyle />
      </Layout>
    );
  }
}
