import React, { Component } from 'react';
import PhoneBook from './components/PhoneBook/PhoneBook';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onContactAddition = evt => {
    console.log(evt);
  };

  render() {
    return (
      <div>
        <PhoneBook options={this.state} addContact={this.onContactAddition()} />
      </div>
    );
  }
}

export default App;
