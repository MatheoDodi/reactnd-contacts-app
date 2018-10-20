import React, { Component } from 'react';
import styled from 'styled-components';

const IMG = styled.div`
  background-image: url(${props => props.url});
`

class ListContact extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://localhost:5001/contacts', 
    { headers: { 'Authorization': 'whatever-you-want' }})
    .then(resp => resp.json())
    .then(data => this.setState( {contacts: data.contacts} ));
  }

  deleteContactHandler = (e, id) => {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState( {contacts: contacts} );
  }

  render() {
      
    return (
      <ul className="contact-list">
        {this.state.contacts.map(contact => (
          <li key={contact.id} className='contact-list-item'>
            <IMG className="contact-avatar" url={contact.avatarURL}></IMG>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button onClick={(e) => this.deleteContactHandler(e, contact.id)} className="contact-remove"></button>
          </li>
        ))}
      </ul>
    )
  }
}

export default ListContact;