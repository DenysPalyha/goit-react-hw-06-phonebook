import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import Notification from '../Notification/Notification';
import { CSSTransition } from 'react-transition-group';
import '../ContactsForm/Transition/ContactsFormTransition.css';
import './Contacts.css';
import './Transition/ContactsTransition.css';
import '../Filter/Transition/Filter-transition.css';
import '../Notification/Transition/notificationTransition.css';
import '../ContactsList/Transition/contactListTransition.css';

class Contacts extends Component {
  state = {
    isOpenModal: false,
  };

  hendleIsOpenModal = () => {
    this.setState({ isOpenModal: true });
    setTimeout(() => {
      this.setState({ isOpenModal: false });
    }, 3000);
  };

  render() {
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title-transition"
          unmountOnExit
        >
          <h1 className="contacts-title">Phonebook</h1>
        </CSSTransition>

        <CSSTransition
          in={this.state.isOpenModal}
          timeout={500}
          classNames="notification-transition"
          unmountOnExit
        >
          <Notification />
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="contacts-form"
          unmountOnExit
        >
          <ContactsForm openModal={this.hendleIsOpenModal} />
        </CSSTransition>

        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          classNames="transition-filter"
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <CSSTransition
          in={this.props.contacts.length > 0}
          timeout={250}
          classNames="contacts-list-transition"
          unmountOnExit
        >
          <ContactsList />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contact.contacts,
  };
};

export default connect(mapStateToProps)(Contacts);
