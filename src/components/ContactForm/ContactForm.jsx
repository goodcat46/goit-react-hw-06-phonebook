import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './contactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const seters = {
    inputName: setInputName,
    inputNumber: setInputNumber,
  };

  // onAddContact
  const handleChange = evt => {
    const { name, value } = evt.target;
    seters[name](value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddContact({ id: nanoid(5), name: inputName, number: inputNumber });
    // * Очистка інпутів
    setInputName('');
    setInputNumber('');
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.div}>
        <label className={css.label} htmlFor="name">
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="inputName"
          id="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={inputName}
          required
          onChange={handleChange}
        />
      </div>
      <div className={css.div}>
        <label className={css.label} htmlFor="number">
          Number
        </label>
        <input
          className={css.input}
          type="tel"
          name="inputNumber"
          id="number"
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={inputNumber}
          required
          onChange={handleChange}
        />
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = { onAddContact: PropTypes.func };

export default ContactForm;
