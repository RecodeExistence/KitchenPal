
import React, { Component } from 'react';

/* CSS Imports */
import './App.css';

/* Component Imports */
import Logo from './components/Logo/Logo';
import FoodImage from './components/FoodImage/FoodImage';
/* mport FoodDetails from './components/FoodDetails/FoodDetails';  */
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return(
      <div className = "App-Container">
        <Logo />
        <FoodImage />
        {/* <FoodDetails /> */}
        <SearchBar />
      </div>
    );
  }
}

export default App;