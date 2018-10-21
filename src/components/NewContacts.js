import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from '../ImageInput';
import serializeForm from 'form-serialize';

class NewContacts extends Component {
  createContactHandler = (data) => {
    fetch('http://localhost:5001/contacts', 
    { method: "POST",
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', 'Authorization': 'whatever-you-want' }})
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)));
  }

  submitHandler = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true })
    console.log(values);

    this.createContactHandler(values);
  }

  render() {
    return (
      <div>
        <Link 
          className='close-create-contact'
          to='/'>
            Close
        </Link>
        <form onSubmit={this.submitHandler} className="create-contact-form">
          <ImageInput
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
          />
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name' />
            <input type='text' name='handle' placeholder='Username' />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewContacts;