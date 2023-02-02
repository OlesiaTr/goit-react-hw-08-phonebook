// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from './../redux/selectors';

// Components
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Loader } from './Loader';

// Styles
import { Layout } from './Layout';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      {isLoading && !error && <Loader />}

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
