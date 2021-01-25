import { createReducer } from '@reduxjs/toolkit';
import {
  addContacts,
  searchFilter,
  contactsDelete,
  getContactsFormLs,
} from '../actions/contactsActions';

const initialeState = {
  contacts: [],
  filter: '',
};

const addContactsReducer = (state, action) => {
  const getContacts = localStorage.getItem('contacts');

  const contact = action.payload;

  if (!getContacts) {
    localStorage.setItem('contacts', JSON.stringify([contact]));
  } else {
    const parseContacts = JSON.parse(getContacts);
    localStorage.setItem(
      'contacts',
      JSON.stringify([contact, ...parseContacts]),
    );
  }

  return {
    ...state,
    contacts: [...state.contacts, action.payload],
  };
};

const getContactsFormLsReduser = (state, action) => ({
  ...state,
  contacts: action.payload,
});

const deleteContactsReducer = (state, action) => {
  const localStorageData = JSON.parse(localStorage.getItem('contacts'));
  const newLocalStorageData = localStorageData.filter(
    contact => contact.id !== action.payload,
  );
  localStorage.setItem('contacts', JSON.stringify(newLocalStorageData));
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
    [getContactsFormLs]: getContactsFormLsReduser,
  },
);
