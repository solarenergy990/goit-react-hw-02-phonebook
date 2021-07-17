import React from 'react';

const PhoneBook = ({ options, addContact }) => {
  const { contacts, name } = options;
  console.log(contacts, name);
  return (
    <div>
      <form className="form">
        <h2>Phonebook</h2>
        <div className="form-container">
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          <button type="submit" onSubmit={addContact} className="button">
            Add contact
          </button>
        </div>
      </form>

      <div className="contacts">
        <h2 className="title">Contacts</h2>
        <ul>
          <li>Илья Иголкин</li>
          <li>Илья Иголкин</li>
          <li>Илья Иголкин</li>
        </ul>
      </div>
    </div>
  );
};

export default PhoneBook;
