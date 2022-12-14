import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilterAction } from 'redux/slices/sliceFilter';
import ContactList from 'components/ContactList/ContactList';
import Title from 'components/Title/Title';

import css from './filter.module.css';

const Filter = () => {
  const [filterInput, setFilterInput] = useState('');
  const [isShownList, setIsShownList] = useState(false);

  const dispatch = useDispatch();

  function handleFilterChange(evt) {
    let { target } = evt;
    setFilterInput(target.value);
  }
  function handleFormSubmit(evt) {
    evt.preventDefault();
    dispatch(applyFilterAction(filterInput.trim()));
    setIsShownList(true)
  }
  return (
    <div className={css.filter}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.label} htmlFor="filter">
          Filter
        </label>
        <input
          className={css.input}
          name="filter"
          type="text"
          id="filter"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={filterInput}
          onChange={handleFilterChange}
        />
        <button className={css.button} type="submit">
          Apply filter
        </button>
      </form>
      {isShownList ? <ContactList /> : <Title title={'Please apply filter'}/>}
      
    </div>
  );
};

export default Filter;
