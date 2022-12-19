// Utils
import { PropTypes } from 'prop-types';

// Styles
import { Name } from './Contact.styled';
import { Btn } from 'components/Button/Button.styled';

export const Contact = ({ item, deleteContact }) => {
  return (
    <>
      <Name>- {item.name}</Name>
      <Btn onClick={() => deleteContact(item.id)}>Delete</Btn>
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
