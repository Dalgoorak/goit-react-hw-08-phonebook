import { getFilter } from '../../redux/phonebookContacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/phonebookContacts/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(changeFilterAction(event.target.value));
  };
  return (
    <label className={css.inputLabel}>
      <h3 className={css.title}>Find contacts by name</h3>

      <input
        type="text"
        value={filter}
        name="filter"
        onChange={onChange}
        className={css.input}
      />
    </label>
  );
};
