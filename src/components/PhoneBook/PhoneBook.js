import React, { Component } from 'react';
import shortid from 'shortid';

class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  telInputId = shortid.generate();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-container">
            <label htmlFor={this.nameInputId}>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
                id={this.nameInputId}
                value={this.state.name}
              />
            </label>
            <label htmlFor={this.telInputId}>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={this.handleChange}
                id={this.telInputId}
                value={this.state.number}
              />
            </label>
            <button type="submit" className="button">
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PhoneBook;
