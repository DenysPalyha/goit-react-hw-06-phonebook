import React from 'react';
import './ContactsList.css';

const ContactsListItem = ({ contact, hendleClick }) => {
  return (
    <li className="contacts-list-item" key={contact.id}>
      <div className="contacts-list-info">
        <p className="contacts-list-name">
          {contact.name}
          <span className="contacts-list-number">{contact.number}</span>
        </p>
        <button
          className="contacts-list-button"
          id={contact.id}
          onClick={hendleClick}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactsListItem;
