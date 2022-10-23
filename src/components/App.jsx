import React, { useState, useEffect } from 'react';

import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import localstorage from 'js/localstorage';

import css from './app.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  function getContacts() {
    if (localstorage.load('contacts') === undefined) {
      return [];
    }
    return localstorage.load('contacts');
  }
  function handleAddContact({ id, name, number }) {
    let contacts = getContacts();
    const namesArr = getContacts().map(el => el.name.toLowerCase());
    if (!namesArr.includes(name.toLowerCase())) {
      localstorage.save('contacts', [
        ...contacts,
        { id, name: name, number: number },
      ]);
      setContacts(() => getContacts());
    } else {
      alert(`"${name}" is already added to contact list.`);
    }
  }
  function handleDeleteContact(userId) {
    localstorage.save(
      'contacts',
      getContacts().filter(user => user.id !== userId)
    );
    setContacts(() => getContacts());
  }
  function handleChangeSearch(evt) {
    const { value } = evt.target;
    setFilter(value);
  }
  function applyFilter() {
    return contacts.filter(
      ({ name }) =>
        !(filter && !name.toLowerCase().includes(filter.toLowerCase()))
    );
  }
  useEffect(() => {
    setContacts(() => getContacts());
  }, []);

  return (
    <div className={css.app}>
      <div className={css.appContainer}>
        <Title title="Add contact" />
        <ContactForm onAddContact={handleAddContact} />
        <Title title="Find contact" />
        <Filter filter={filter} onChangeInput={handleChangeSearch} />
        <ContactList
          contactList={applyFilter()}
          toDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};
