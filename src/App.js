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



  //Input changes on input bar, update relevant state. 
  inputChanged = (event) => {
    this.applyIconAnimate();
    this.setState({
      foodNameInput: event.target.value, 
    });
    console.log(this.state.foodNameInput); 
  }

  applyIconAnimate = async () => {
    const cheeseBurgerIcon = document.querySelector('.hamburgerIconContainer'); 
    await cheeseBurgerIcon.classList.add('animated', 'flash');

    //remove the class again after a moment, so it can be reused each time input changes.
    setTimeout(() => {
      cheeseBurgerIcon.classList.remove('animated', 'flash')
    }, 1500);
  }


  render() {
    const { imageToDisplay } = this.state; 
    return(
      <div className = "App-Container">
        <Logo />
        <SearchBar inputChanged = {this.inputChanged} onIconClick = {this.onIconClick} applyIconAnimate = {this.applyIconAnimate}/>
        <FoodImage imageToDisplay =  {imageToDisplay}/>
        
      </div>
    );
  }
}

export default App;