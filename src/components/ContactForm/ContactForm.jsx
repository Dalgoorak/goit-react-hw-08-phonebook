import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { postNewContact } from 'redux/contacts/contacts-operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleChange = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ) ||
      contacts.find(contact => contact.number === number)
    ) {
      return alert(`${name} is already in contacts!`);
    }
    dispatch(postNewContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <form className={css.boxInput} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            value={name}
            onChange={handleChange}
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={css.label}>
          Numbers
          <input
            onChange={handleChange}
            value={number}
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <div>
          <button type="submit" className={css.addContact}>
            Add contact
          </button>
        </div>
      </form>
    </>
  );
};
