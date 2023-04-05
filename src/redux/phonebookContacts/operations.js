import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'helpers/contactsApi';

export const getContactData = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkApi) => {
    try {
      const responce = await getContacts();
      return responce;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const setContactData = createAsyncThunk(
  'contact/addContact',
  async (contact, thunkApi) => {
    try {
      const responce = await addContact(contact);
      return responce;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactData = createAsyncThunk(
  'contact/deleteContact',
  async (id, thunkApi) => {
    try {
      const responce = await deleteContact(id);
      return responce;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
