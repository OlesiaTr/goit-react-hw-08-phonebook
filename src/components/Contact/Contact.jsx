// Core
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

// Utils
import { PropTypes } from 'prop-types';

// Styles
import { Wrapper, Name, Number, Icon, Phone } from './Contact.styled';
import { Btn } from 'components/Button/Button.styled';

export const Contact = ({ item: { name, id, number } }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <>
      <Wrapper>
        <Name>{name}</Name>
        <Number>
          <Phone />
          {number}
        </Number>
      </Wrapper>
      <Btn onClick={onDeleteContact}>
        <Icon />
      </Btn>
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
