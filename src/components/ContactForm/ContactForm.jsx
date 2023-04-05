import { useState } from 'react';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';

import css from './ContactForm.module.css';
import { setContactData } from 'redux/phonebookContacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContacts(name, number);
    setName('');
    setNumber('');
  };

  const addContacts = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(setContactData({ name, number, id: nanoid() }));
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          placeholder="111-11-11"
          className={css.input}
        />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
