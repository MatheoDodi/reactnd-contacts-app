import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {
    return (
        <div className="list-contacts-top">
            <input 
                className='search-contacts'
                type='text'
                placeholder='Search Contacts'
                value={props.val}
                onChange={props.change} />
            <Link to="/create" className="add-contact">Add Contact</Link>
        </div>
    )

}

export default Search;