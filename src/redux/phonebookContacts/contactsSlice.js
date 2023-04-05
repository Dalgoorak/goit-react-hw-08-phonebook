import { createSlice } from '@reduxjs/toolkit';

import {
  getContactData,
  setContactData,
  deleteContactData,
} from './operations';

const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
};

export const initialState = {
  contacts: [],
  status: Status.init,
  error: null,
};

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContactData.pending](state) {
      state.status = Status.loading;
    },

    [getContactData.fulfilled](state, action) {
      state.status = Status.success;
      state.contacts = [...action.payload];
    },

    [getContactData.rejected](state) {
      state.status = Status.error;
    },

    [setContactData.pending](state) {
      state.status = Status.loading;
    },

    [setContactData.fulfilled](state, action) {
      state.status = Status.success;
      state.contacts = [...state.contacts, action.payload];
    },

    [setContactData.rejected](state) {
      state.status = Status.error;
    },

    [deleteContactData.pending](state) {
      state.status = Status.loading;
    },

    [deleteContactData.fulfilled](state, action) {
      state.status = Status.success;
      state.item = state.item.filter(
        contact => contact.id !== action.payload.id
      );
    },

    [deleteContactData.rejected](state) {
      state.status = Status.error;
    },
  },
});

export default contactsSlise.reducer;
