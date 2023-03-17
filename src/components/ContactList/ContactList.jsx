import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsAction } from 'redux/phonebookContacts/contactsSlice';
import { getFilterContacts } from 'redux/phonebookContacts/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();
  const handleDeleteUser = id => {
    dispatch(deleteContactsAction(id));
  };
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <p>
            <span className={css.name}>{name}: </span>
            <span className={css.number}>{number}</span>
          </p>
          <button
            onClick={() => handleDeleteUser(id)}
            type="button"
            className={css.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
