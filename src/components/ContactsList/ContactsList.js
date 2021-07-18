import React from 'react';

const ContactsList = ({ contacts, onContactDelete, children }) => {
  return (
    <div className="contacts">
      <h2 className="title">Contacts</h2>
      {children}
      <ul>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <li key={id}>
              <p>
                {name} : {number}
              </p>
              <button type="button" onClick={() => onContactDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
