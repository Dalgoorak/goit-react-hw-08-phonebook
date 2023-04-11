import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export async function getContacts () {
  const { data } = await axios.get('https://connections-api.herokuapp.com/contacts')
  return data
}
export const getAllUserContacts = createAsyncThunk('get/contacts', async (_, thunkAPI) => {
  try {
    const response = await getContacts()
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export async function createNewContact (body) {
  const { data } = await axios.post('https://connections-api.herokuapp.com/contacts', body)
  return data
}
export const postNewContact = createAsyncThunk('post/contact', async (data, thunkAPI) => {
  try {
    const response = await createNewContact(data)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export async function deleteContact (body) {
  const { data } = await axios.delete(`https://connections-api.herokuapp.com/contacts/${body}`)
  return data
}
export const removeContact = createAsyncThunk('delete/contact', async (data, thunkAPI) => {
  try {
    const response = await deleteContact(data)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export async function patchContact (body) {
  const { data } = await axios.patch(`https://connections-api.herokuapp.com/contacts/${body}`)
  return data
}
export const updateContact = createAsyncThunk('delete/contact', async (data, thunkAPI) => {
  try {
    const response = await patchContact(data)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

