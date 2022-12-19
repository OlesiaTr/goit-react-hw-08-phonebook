// Utils
import { object, PropTypes } from 'prop-types';

// Components
import { Contact } from './../Contact/Contact';

// Styles
import { List, Item } from './ContactList.styled';

export const ContactList = ({ filterList, deleteContact }) => {
  return (
    <List>
      {filterList.map(item => (
        <Item key={item.id}>
          <Contact item={item} deleteContact={deleteContact} />
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filterList: PropTypes.arrayOf(object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
