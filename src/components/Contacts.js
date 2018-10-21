import React, { Fragment } from 'react';
import styled from 'styled-components';

const IMG = styled.div`
  background-image: url(${props => props.url});
`

const Contacts = (props) => {
 return (
   <Fragment>
    {props.contacts.map(contact => (
      <li key={contact.id} className='contact-list-item'>
        <IMG className="contact-avatar" url={contact.avatarURL}></IMG>
        <div className="contact-details">
          <p>{contact.name}</p>
          <p>{contact.handle}</p>
        </div>
        <button onClick={(e) => props.delete(e, contact.id)} className="contact-remove"></button>
      </li>
    ))}
  </Fragment>
 )
}

export default Contacts;