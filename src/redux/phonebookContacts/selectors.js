export const getFilterContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
  );
};

export const getFilter = state => state.filter.filter;
