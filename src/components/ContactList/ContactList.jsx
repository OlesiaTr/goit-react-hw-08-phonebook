// Core
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

// Components
import { Contact } from './../Contact/Contact';

// Styles
import { List, Item } from './ContactList.styled';

export const ContactList = () => {
  const filterList = useSelector(selectFilteredContacts);

  return (
    <List>
      {filterList.map(item => (
        <Item key={item.id}>
          <Contact item={item} />
        </Item>
      ))}
    </List>
  );
};
