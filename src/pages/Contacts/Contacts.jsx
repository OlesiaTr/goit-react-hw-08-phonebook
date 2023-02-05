// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

// Components
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

// Styles
import { Main } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      {contacts.length > 0 && <Filter />}
      <div>{isLoading && 'Request in progress...'}</div>
      {contacts.length > 0 && <ContactList />}
    </Main>
  );
}
