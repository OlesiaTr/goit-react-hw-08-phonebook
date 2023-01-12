// Core
import { useState, useEffect } from 'react';

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

// CONSTANTS
const LS_KEY = 'contacts-edit';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(LS_KEY)) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const inContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!inContacts) {
      setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);

      return true;
    }

    alert(`${name} is already added to your contacts`);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const onFilter = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const onFilterChange = e => setFilter(e.currentTarget.value);

  return (
    <Layout>
      <h1>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <Filter value={filter} onChange={onFilterChange} />
      ) : (
        <p style={{ marginTop: 10, color: `#fb6d3a`, fontWeight: 700 }}>
          You have no contacts yet (；′⌒`)
        </p>
      )}

      <ContactList filterList={onFilter()} deleteContact={deleteContact} />

      <GlobalStyle />
    </Layout>
  );
};
