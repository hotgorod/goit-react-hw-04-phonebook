import { useState } from 'react';
import React from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContactCallback }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    addContactCallback(name, number);

    setNumber('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label>
        Name
        <input
          className={css.inputText}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className={css.inputText}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={css.formButton}>
        Add contact
      </button>
    </form>
  );
};


export default ContactForm;
