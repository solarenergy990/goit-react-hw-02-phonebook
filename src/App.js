import React, { Component } from 'react';
import PhoneBook from './components/PhoneBook/PhoneBook';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import initialContacts from './contacts.json';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const checkedContactNames = contacts.map(contact => {
      return contact.name.toLowerCase();
    });

    if (!checkedContactNames.includes(name.toLowerCase())) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h2>Phonebook</h2>
        <PhoneBook onSubmit={this.addContact} />

        <ContactsList
          contacts={visibleContacts}
          onContactDelete={this.deleteContact}
        >
          <Filter value={filter} onChange={this.changeFilter} />
        </ContactsList>
      </div>
    );
  }
}

export default App;
