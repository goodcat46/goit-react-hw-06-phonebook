import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './addContact/slice_Contacts';
import { filterReducer } from './contactFilter/slice_Filter';
export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
