import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';

import css from './ContactList.module.css';
import { useEffect } from 'react';
import {
  getAllUserContacts,
  removeContact,
} from 'redux/contacts/contacts-operations';

export function ContactList() {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(getAllUserContacts());
  }, [dispatch]);

  const onDeleteContact = event => {
    const { id } = event.currentTarget;
    dispatch(removeContact(id));
  };

  return (
    <ul className={css.list}>
      {allContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p className={css.name}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.button}
            id={contact.id}
            onClick={onDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
