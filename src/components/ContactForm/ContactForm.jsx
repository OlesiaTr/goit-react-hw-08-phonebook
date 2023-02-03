// Core
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading } from 'redux/selectors';

// Components
import { Button } from './../Button';

// Styles
import { Form, Label } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (submitted && !isLoading) {
      setSubmitted(false);
    }
  }, [isLoading, submitted]);

  const handleSubmit = e => {
    e.preventDefault();

    const withinContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (withinContacts) return alert(`${name} is already in contacts`);

    dispatch(addContact({ name, number }));
    setSubmitted(true);
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error('Smth went wrong');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name{' '}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </Label>

      <Label>
        Number{' '}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </Label>

      <Button type="submit" disabled={submitted}>
        Add contact
      </Button>
    </Form>
  );
};
