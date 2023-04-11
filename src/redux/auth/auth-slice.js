import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from './fetchStatus';
import { currentUser, login, logout, registration} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  status: fetchStatus.init
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registration.pending](state) {
      state.status = fetchStatus.loading
    },
    [registration.fulfilled](state, action) {
      state.status = fetchStatus.success
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    [registration.rejected](state) {
      state.status = fetchStatus.error
      state.user.name = ''
      state.user.email = null
      state.isLoggedIn = false
      state.token = null
    },

    [login.pending](state) {
      state.status = fetchStatus.loading
    },
    [login.fulfilled](state, action) {
      state.status = fetchStatus.success
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    [login.rejected](state) {
      state.status = fetchStatus.error
      state.user.name = null
      state.user.email = null
      state.isLoggedIn = false
      state.token = null
    },

    [logout.pending](state) {
      state.status = fetchStatus.loading
    },
    [logout.fulfilled](state, action) {
      state.status = fetchStatus.success
      state.user = null
      state.token = null
      state.isLoggedIn = false
    },
    [logout.rejected](state) {
      state.status = fetchStatus.error
      state.user.name = null
      state.user.email = null
      state.isLoggedIn = false
      state.token = null
    },

    [currentUser.pending](state) {
      state.status = fetchStatus.loading
    },
    [currentUser.fulfilled](state, action) {
      state.status = fetchStatus.success
      state.user = action.payload
      state.isLoggedIn = true
    },
    [currentUser.rejected](state) {
      state.status = fetchStatus.error
      state.user.name = null
      state.user.email = null
      state.isLoggedIn = false
      state.token = null
    },
  },
});
export default authSlice.reducer;


