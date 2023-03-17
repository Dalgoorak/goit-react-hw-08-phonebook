import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './phonebookContacts/contactsSlice';
import filterReducer from './phonebookContacts/filterSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
