import React, { Component } from 'react';

/* CSS Imports */
import './App.css';

/* Component Imports */
import Logo from './components/Logo/Logo';
import FoodImage from './components/FoodImage/FoodImage';

import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {

  // App Level State:  
  constructor() {
    super(); 
    this.state = {
      foodNameInput: '',
    }
  }

  //Input changes on input bar, update relevant state. 
  inputChanged = (event) => {
    this.setState({
      foodNameInput: event.target.value, 
    });
    console.log(this.state.foodNameInput); 
  }

  render() {
    return(
      <div className = "App-Container">
        <Logo />
        <SearchBar inputChanged = {this.inputChanged}/>
        <FoodImage />
        
      </div>
    );
  }
}

export default App;