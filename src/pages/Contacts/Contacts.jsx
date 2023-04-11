import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import React from 'react';
import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={css.allContent}>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
