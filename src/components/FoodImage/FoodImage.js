import React from 'react'; 

import './FoodImage.css';

const FoodImage = ({imageToDisplay}) => {
    return (
        <div className = "FoodImage-DisplayBox">
            {/*Placeholder till image data pulled*/}
            <img src = {imageToDisplay} alt = "Food to be displayed here." />

        </div>
    ); 
}

export default FoodImage; 