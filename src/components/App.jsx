import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './ContactForm/ContactForm.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <Filter />

      <ContactList />
      <h2>Contacts</h2>
    </div>
  );
};
