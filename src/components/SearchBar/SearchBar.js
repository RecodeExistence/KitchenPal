import React from 'react'; 

import './SearchBar.css';
import hamburgerButton from './hamburgerButton.png';

const SearchBar = ({inputChanged}) => {
    
    return (
    <div className = "SearchBar">
        <label htmlFor = "searchbar"></label>
            <input onChange = {inputChanged} type = "text" placeholder = "enter a food name to begin" id = 'searchbar' />
        <div className = "hamburgerButtonDiv">
                <img src = {hamburgerButton} alt = "a hamburger"/>
            </div>
    </div>
        );
}

export default SearchBar;