import React from 'react';
import { useSelector } from 'react-redux';

import Contact from './Contact/Contact';

import css from './contactList.module.css';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter:{filter} } = useSelector(state => state.filter);

  function applyFilter() {
    return contacts.filter(
      ({ name }) =>
        !(filter && !name.toLowerCase().includes(filter.toLowerCase()))
    );
  }

  return (
    <ul className={css.contactList}>
      {applyFilter().map(el => (
        <Contact key={el.id} id={el.id} name={el.name} number={el.number} />
      ))}
      {contacts.length === 0 && (
        <li className={css.notification}>Not founded contacts</li>
      )}
    </ul>
  );
};

export default ContactList;
