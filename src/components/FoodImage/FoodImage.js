import React from 'react'; 

import './FoodImage.css';

const FoodImage = () => {
    return (
        <div className = "FoodImage-DisplayBox">
            {/*Placeholder till image data pulled*/}
            <img src = "https://picsum.photos/536/354" alt = "Food Image to be displayed here." />

        </div>
    ); 
}

export default FoodImage; 