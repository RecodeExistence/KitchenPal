
import React, { Component } from 'react';

/* CSS Imports */
import './App.css';

/* Component Imports */
import Logo from './components/Logo/Logo';
import FoodImage from './components/FoodImage/FoodImage';

import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return(
      <div className = "App-Container">
        <Logo />
        <FoodImage />
        <SearchBar />
      </div>
    );
  }
}

export default App;