// Core
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';

// Styles
import { Label } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const normalized = e.target.value.toLowerCase();
    dispatch(setFilter(normalized));
  };

  return (
    <Label>
      Find contacts by name
      <input onChange={onChange} type="text" name="filter" value={value} />
    </Label>
  );
};
