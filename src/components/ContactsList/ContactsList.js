import React from 'react';
import { connect } from 'react-redux';
import { contactsDelete } from '../../redux/actions/contactsActions';
import ContactsListItem from './ContactsListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ContactsList.css';
import './Transition/contactListTransition.css';

const ContactsList = ({ contacts, contactsDelete }) => {
  const onHandleClick = e => {
    contactsDelete(e.target.id);
  };

  return (
    <TransitionGroup component="ul" className="contacts-list">
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames="contscts-list-transition"
          unmountOnExit
        >
          <ContactsListItem
            key={contact.id}
            contact={contact}
            hendleClick={onHandleClick}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contact.contacts.filter(item =>
      item.name.toLowerCase().includes(state.contact.filter),
    ),
  };
};

export default connect(mapStateToProps, { contactsDelete })(ContactsList);
