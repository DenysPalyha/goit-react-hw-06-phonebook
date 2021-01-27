import { createReducer } from '@reduxjs/toolkit';
import {
  addContacts,
  searchFilter,
  contactsDelete,
} from '../actions/contactsActions';

const initialeState = {
  contacts: [],
  filter: '',
};

const addContactsReducer = (state, action) => {

  return {
    ...state,
    contacts: [...state.contacts, action.payload],
  };
};

const deleteContactsReducer = (state, action) => {
  return {
    ...state,
    contacts: [
      ...state.contacts.filter(contact => contact.id !== action.payload),
    ],
  };
};

const searchContactsReducer = (state, action) => ({
  ...state,
  filter: action.payload,
});

export const contactsReducer = createReducer(
  { ...initialeState },
  {
    [addContacts]: addContactsReducer,
    [contactsDelete]: deleteContactsReducer,
    [searchFilter]: searchContactsReducer,
  },
);
