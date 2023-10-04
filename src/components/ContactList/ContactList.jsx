import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ key, contactName, contactNumber }) => (
        <li className={css.contactListItem} key={key}>
          <p className={css.contactListItemText}>
            {contactName}: {contactNumber}
          </p>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => onDeleteContact(key)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
