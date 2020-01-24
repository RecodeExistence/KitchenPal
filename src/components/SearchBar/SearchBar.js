import React from 'react'; 

import './SearchBar.css';
import hamburgerButton from './hamburgerButton.png';

const SearchBar = ({inputChanged, onIconClick}) => {
    
    return (
    <div className = "SearchBar">
        <label htmlFor = "searchbar"></label>
            <input onChange = {inputChanged} type = "text" placeholder = "Enter a food item, click the burger!" id = 'searchbar' />
        <div className = "hamburgerIconContainer">
                <img src = {hamburgerButton} alt = "a hamburger" onClick = {onIconClick}/>
        </div>
    </div>
        );
}

window.onload = () => setTimeout(() => {
    document.querySelector('.SearchBar').style.visibility="visible"; 
    document.querySelector('.SearchBar').classList.add('animated', 'fadeIn'); 

    document.querySelector('.hamburgerIconContainer').classList.add('animated', 'rotateIn');
}, 2000);
export default SearchBar;