import React from 'react';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, contactName, contactNumber, onClickRemove }) => {
  //   console.log(onContactDelete);
  return (
    <li key={id} className={s.listItem}>
      <p className={s.listText}>
        {contactName} : {contactNumber}
      </p>
      <button type="button" className={s.button} onClick={onClickRemove}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
