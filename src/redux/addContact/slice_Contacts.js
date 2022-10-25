import { createSlice } from '@reduxjs/toolkit';

import { contactsInitialState } from './initialStateContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    deleteContactAction(state, action) {
      console.log(state.contacts);
      console.log(action);
      state.contacts = state.contacts.filter(
        user => user.id !== action.payload
      );
    },
    addContactAction(state, action) {
      state.contacts.unshift(action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { deleteContactAction, addContactAction } = contactsSlice.actions;
