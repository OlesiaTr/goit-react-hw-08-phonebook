// Core
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/slice';

// Styles
import { Label, Input, Search } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const normalized = e.target.value.toLowerCase();
    dispatch(setFilter(normalized));
  };

  return (
    <Label>
      <Input
        onChange={onChange}
        type="text"
        name="filter"
        value={value}
        placeholder="Search for contact ..."
      />
      <Search />
    </Label>
  );
};
