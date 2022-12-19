// Utils
import { PropTypes } from 'prop-types';

// Styles
import { Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input onChange={onChange} type="text" name="filter" value={value} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
