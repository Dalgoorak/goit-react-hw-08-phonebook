import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactData,
  getContactData,
} from 'redux/phonebookContacts/operations';

import { getFilterContacts } from 'redux/phonebookContacts/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  useEffect(() => {
    dispatch(getContactData());
  }, [dispatch]);

  const handleDeleteUser = id => {
    dispatch(deleteContactData(id));
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
