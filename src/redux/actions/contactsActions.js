import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/addContacts');

const searchFilter = createAction('contacts/filterContacts');

const contactsDelete = createAction('contacts/deleteContacts');

const getContactsFormLs = createAction('contacts/getContacts');

export { addContacts, searchFilter, contactsDelete, getContactsFormLs };
