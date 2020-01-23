import React from 'react'; 

import './SearchBar.css';

const SearchBar = () => {
    
        return (
            <div className = "SearchBar">
                <label htmlFor = "searchbar"></label>
                <input type = "text" placeholder = "enter a food name to begin" id = 'searchbar' />
            </div>
        );
}

export default SearchBar;