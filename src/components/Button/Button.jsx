// Utils
import { PropTypes } from 'prop-types';

// Styles
import { Btn } from './Button.styled';

export const Button = ({ children }) => {
  return <Btn>{children}</Btn>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
