import { useEffect, useState } from 'react';
import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from './ContactForm/ContactForm.';
import css from './App.module.css';

const LS_KONTACT_KEY = 'contact_detais';

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem(LS_KONTACT_KEY)) || []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const jsonContacts = JSON.stringify(contacts);
    localStorage.setItem(LS_KONTACT_KEY, jsonContacts);
  }, [contacts]);


  const deleteContact = contactKey => {
    setContacts(contacts.filter(contact => contact.key !== contactKey));
  };

  const addContact = (contactName, contactNumber) => {
    const isDuplicate = contacts.some(
      contact => contact.contactName === contactName
    );

    if (isDuplicate) {
      alert('The contact already exist');
      return;
    }

    const contact = {
      key: nanoid(),
      contactName: contactName,
      contactNumber: contactNumber,
    };
    setContacts([contact, ...contacts]);
    // this.setState(prevState => ({
    //   contacts: [contact, ...prevState.contacts],
    // }));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.contactName.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContactCallback={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem(LS_KONTACT_KEY);
  //   const contactsToObject = JSON.parse(savedContacts) || [];
  //   setContacts(contactsToObject);

  // }, [])

  // componentDidMount() {
  //   const savedContacts = localStorage.getItem(LS_KONTACT_KEY);
  //   const contactsToObject = JSON.parse(savedContacts) || [];
  //   this.setState({ contacts: contactsToObject });

  // }

  // componentDidUpdate(_, prevState) {
  //   if (this.state.contacts.length !== prevState.contacts.length) {
  //     const jsonContacts = JSON.stringify(this.state.contacts);
  //     localStorage.setItem(LS_KONTACT_KEY, jsonContacts);
  //   }

  // }
