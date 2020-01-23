import React, { Component } from 'react';
/* CSS Imports */
import './App.css';
/* Component Imports */
import Logo from './components/Logo/Logo';
import FoodImage from './components/FoodImage/FoodImage';
import SearchBar from './components/SearchBar/SearchBar';


// Spoonacular API call build: 
const getFoodData = async (url) => {
  const response = await fetch(url); 
  const data = await response.json(); 
return data;
}

class App extends Component { 
  
  // App Level State:  
  constructor() {
    super(); 
    this.state = {
      foodNameInput: '',
      imageToDisplay: 'https://www.graphicsprings.com/filestorage/stencils/c78dca3cef19a66e41ca112ebb3ae706.png?width=500&height=500'
    }
  }

//When icon is clicked to submit user input search term, build the api fetch.   
onIconClick = async () => {
  //grab state of foodnameinput. 
  const { foodNameInput, imageToDisplay } = this.state;
  console.log('imageToDisplay from state', {imageToDisplay}); 
  //Build url to make API call.  
  const urlRequest = `https://api.spoonacular.com/food/menuItems/search?&query=${foodNameInput}&number=1&apiKey=b6bb6f481ac145b98f1bc8fda4e6695f`; 

    // run api fetch, save to variable.  
    const dataReturned = await getFoodData(urlRequest); 
    const displayImage = dataReturned.menuItems[0].image;
    this.setState({imageToDisplay: displayImage});  
}


  //Input changes on input bar, update relevant state. 
  inputChanged = (event) => {
    this.setState({
      foodNameInput: event.target.value, 
    });
    console.log(this.state.foodNameInput); 
  }


  render() {
    const { imageToDisplay } = this.state; 
    return(
      <div className = "App-Container">
        <Logo />
        <SearchBar inputChanged = {this.inputChanged} onIconClick = {this.onIconClick}/>
        <FoodImage imageToDisplay =  {imageToDisplay}/>
        
      </div>
    );
  }
}

export default App;