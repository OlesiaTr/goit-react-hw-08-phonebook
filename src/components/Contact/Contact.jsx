// Core
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

// Utils
import { PropTypes } from 'prop-types';

// Styles
import { Name } from './Contact.styled';
import { Btn } from 'components/Button/Button.styled';

export const Contact = ({ item: { name, id } }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <>
      <Name>- {name}</Name>
      <Btn onClick={onDeleteContact}>Delete</Btn>
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
