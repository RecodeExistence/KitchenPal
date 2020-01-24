import React, { Component } from 'react';
/* CSS Imports */
import './App.css';
/* Component Imports */
import NotesButton from './components/NotesButton/NotesButton';
import Logo from './components/Logo/Logo';
import FoodImage from './components/FoodImage/FoodImage';
import SearchBar from './components/SearchBar/SearchBar';
import FollowUpNotes from './components/FollowUpNotes/FollowUpNotes';


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
      imageToDisplay: 'https://www.graphicsprings.com/filestorage/stencils/c78dca3cef19a66e41ca112ebb3ae706.png?width=500&height=500', 
      route: 'home'
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
    try {
    const dataReturned = await getFoodData(urlRequest); 
    const displayImage = dataReturned.menuItems[0].image;
    this.setState({imageToDisplay: displayImage});  
    
  }
      catch(err) {
        console.log(err);
      }
    
  }

  notesButtonClick = () => {
    this.setState({route: 'displayWriteUp'}); 
    console.log(this.state);
  }



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
    await cheeseBurgerIcon.classList.remove('animated', 'rotateIn');
    await cheeseBurgerIcon.classList.add('animated', 'flash');

    //remove the class again after a moment, so it can be reused each time input changes.
    setTimeout(() => {
      cheeseBurgerIcon.classList.remove('animated', 'flash')
    }, 1500);
  }


  render() {
    const { imageToDisplay, route } = this.state;
    return (
    <div className = "App">

      {/* // display home page when route is set to home */} 
     {route === 'home' ?  
      <div className = "App-Container">
          <NotesButton notesButtonClicked = {this.notesButtonClick}/> 
          <Logo />
          <SearchBar inputChanged = {this.inputChanged} onIconClick = {this.onIconClick} applyIconAnimate = {this.applyIconAnimate}/>
          <FoodImage imageToDisplay =  {imageToDisplay}/>  
      </div>
      
      : 
      <FollowUpNotes />
    
    } 
    </div>   
    )
  }
}

export default App;