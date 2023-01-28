// Core
import { useSelector } from 'react-redux';
import { getContacts } from './../redux/selectors';

// Components
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

// Styles
import { Layout } from './Layout';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Layout>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <p style={{ marginTop: 10, color: `#fb6d3a`, fontWeight: 700 }}>
          You have no contacts yet (；′⌒`)
        </p>
      )}

      {contacts.length > 0 && <ContactList />}
    </Layout>
  );
};
