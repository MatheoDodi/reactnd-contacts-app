import React from 'react';

const Search = (props) => {
    return (
        <input 
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={props.val}
            onChange={props.change} />
    )

}

export default Search;