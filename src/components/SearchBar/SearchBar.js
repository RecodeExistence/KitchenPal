import React from 'react'; 

import './SearchBar.css';
import hamburgerButton from './hamburgerButton.png';

const SearchBar = ({inputChanged, onIconClick}) => {
    
    return (
    <div className = "SearchBar">
        <label htmlFor = "searchbar"></label>
            <input onChange = {inputChanged} type = "text" placeholder = "enter a food name to begin" id = 'searchbar' />
        <div className = "hamburgerButtonDiv">
                <img src = {hamburgerButton} alt = "a hamburger" onClick = {onIconClick}/>
        </div>
    </div>
        );
}

export default SearchBar;