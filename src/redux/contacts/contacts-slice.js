import { createSlice } from '@reduxjs/toolkit'
import { getAllUserContacts, postNewContact, removeContact,  } from './contacts-operations';

const Status = {
  init: "INIT",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

export const initialState = {
  contacts: [],
  status: Status.init
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getAllUserContacts.pending](state) {
      state.status = Status.loading
    },
    [getAllUserContacts.fulfilled](state, action) {
      state.status = Status.success
      state.contacts = [...action.payload]
    },
    [getAllUserContacts.rejected](state) {
      state.status = Status.error
    },

    [postNewContact.pending](state) {
      state.status = Status.loading
    },
    [postNewContact.fulfilled](state, action) {
      state.status = Status.success
      state.contacts = [...state.contacts, action.payload]
    },
    [postNewContact.rejected](state) {
      state.status = Status.error
    },

    [removeContact.pending](state) {
      state.status = Status.loading
    },
    [removeContact.fulfilled](state, action) {
      state.status = Status.success
      state.contacts=state.contacts.filter(contact=>contact.id !== action.payload.id)
    },
    [removeContact.rejected](state) {
      state.status = Status.error
    },
  }
})

export default contactsSlice.reducer
