import React, { Component, Fragment  } from 'react';
import styled from 'styled-components';
import sortBy from 'sort-by';
import Search from '../components/Search';
import NewContacts from '../components/NewContacts';
import Contacts from '../components/Contacts';


const IMG = styled.div`
  background-image: url(${props => props.url});
`

class ListContact extends Component {
  state = {
    contacts: [],
    input: {
      value: ''
    },
    queryContacts: []
  }

  componentDidMount() {
    fetch('http://localhost:5001/contacts', 
    { headers: { 'Authorization': 'whatever-you-want' }})
    .then(resp => resp.json())
    .then(data => this.setState( {contacts: data.contacts.sort(sortBy('name')), queryContacts: data.contacts.sort(sortBy('name'))} ));
  }

  deleteContactHandler = (e, id) => {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState( {contacts: contacts, queryContacts: contacts} );
  }

  updateValueHandler = (e) => {
    const newInput = { ...this.state.input };
    const currContacts = [ ...this.state.contacts ];
    const currValue = e.target.value.trim();
    const queryRegExp = new RegExp(currValue, 'gi');
    newInput.value = currValue;
    
    const newContacts = currContacts.filter(contact => queryRegExp.test(contact.name));
    console.log(newContacts);
    this.setState( {input : newInput, queryContacts: newContacts} );
  }

  resetQueryContactsHandler = () => this.setState( {queryContacts: this.state.contacts, input: {value: ''}} )

  render() {
      
    return (
      <Fragment>
        <Search change={this.updateValueHandler} val={this.state.input.value} />
        <ul className="contact-list">
          <Contacts contacts={this.state.queryContacts} delete={(event, id) => this.deleteContactHandler(event, id)} />
        </ul>
        {this.state.queryContacts.length === this.state.contacts.length 
          ? null 
          : <div className="showing-contacts">
              <span>Showing {this.state.queryContacts.length} out of {this.state.contacts.length}</span><button onClick={this.resetQueryContactsHandler} >Show All</button>
            </div> }
        <NewContacts />
      </Fragment>
    )
  }
}

export default ListContact;