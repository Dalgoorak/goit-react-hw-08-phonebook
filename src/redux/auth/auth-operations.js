import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  },
}

export async function createNewUser(user) {
  const { data } = await axios.post('https://connections-api.herokuapp.com/users/signup', user)
  return data
}
export const registration = createAsyncThunk('auth/registration', async (data, thunkAPI) => {
  try {
    const response = await createNewUser(data)
    token.set(response.token)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export async function loginUser (user) {
  const { data } = await axios.post('https://connections-api.herokuapp.com/users/login', user)
  return data
}
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await loginUser(data)
    token.set(response.token)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


export async function logoutUser (user) {
  const { data } = await axios.post('https://connections-api.herokuapp.com/users/logout', user)
  return data
}
export const logout = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
  try {
    const response = await logoutUser(data)
    token.unset(response.token)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});


// для сохранения данных пользователя
export async function userCurrent () {
  const { data } = await axios.get('https://connections-api.herokuapp.com/users/current')
  return data
}
export const currentUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState()
    token.set(state.auth.token)
    const response = await userCurrent()
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});



