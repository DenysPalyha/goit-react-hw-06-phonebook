import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/addContacts');

const searchFilter = createAction('contacts/filterContacts');

const contactsDelete = createAction('contacts/deleteContacts');

export { addContacts, searchFilter, contactsDelete};
