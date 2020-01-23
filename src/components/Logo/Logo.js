import React from 'react';

import './Logo.css'
import LogoPng from './logo.png'
const Logo = () => {
    return (
        <div className = "Logo">
            {/*Placeholder till logo created */}
            <img src = {LogoPng} alt = "KitchenPal Logo" />
        </div>
    );
}

export default Logo; 