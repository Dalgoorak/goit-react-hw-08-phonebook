import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  contacts: [],
};

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactsAction: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },

    deleteContactsAction: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContactsAction, deleteContactsAction } =
  contactsSlise.actions;

export default contactsSlise.reducer;
