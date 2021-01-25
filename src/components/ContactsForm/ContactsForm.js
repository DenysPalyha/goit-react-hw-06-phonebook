import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContacts } from '../../redux/actions/contactsActions';
import { v4 as uuidv4 } from 'uuid';
import './ContactsForm.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onHendleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHendleSubmite = e => {
    e.preventDefault();
    const { contacts } = this.props;

    const availableContact = contacts.some(
      contact => contact.name === this.state.name,
    );

    if (availableContact) {
      this.props.openModal();
      return this.setState({ name: '', number: '' });
    }

    this.props.onAddContacts({ ...this.state, id: uuidv4() });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="form-styles" onSubmit={this.onHendleSubmite}>
        <label className="label-form">
          Name
          <input
            className="input-form"
            type="text"
            name="name"
            value={name}
            onChange={this.onHendleChange}
          />
        </label>
        <label className="label-form">
          Number
          <input
            className="input-form"
            type="text"
            name="number"
            value={number}
            onChange={this.onHendleChange}
          />
        </label>
        <button className="button-form" type="submit">
          Add contacts
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contact.contacts,
  };
};

const mapDispatchToProps = {
  onAddContacts: addContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
