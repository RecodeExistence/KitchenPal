import React from 'react';

import './Logo.css'
import LogoPng from './logo.png'
const Logo = () => {
    return (
        <div className = "Logo animated fadeInDown">
            {/*Placeholder till logo created */}
            <img src = {LogoPng} alt = "KitchenPal Logo" />
        </div>
    );
}

export default Logo; 