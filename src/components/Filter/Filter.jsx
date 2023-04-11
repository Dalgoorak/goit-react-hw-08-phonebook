import { useDispatch, useSelector } from 'react-redux';
import { filterContactAction } from 'redux/filter/filter-slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.filter);

  const filterContact = event => {
    const { value } = event.currentTarget;
    dispatch(filterContactAction(value));
  };

  return (
    <>
      <h2 className={css.contacts}>Contacts</h2>
      <form className={css.form}>
        <label className={css.label}>
          Find contacts by name
          <input
            className={css.input}
            type="text"
            value={value}
            onChange={filterContact}
          />
        </label>
      </form>
    </>
  );
};
