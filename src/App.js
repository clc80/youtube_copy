import React, { Component } from 'react';

import Searchbar from './components/searchbar';
import './App.css';

const API_KEY = 'AIzaSyAsR_b87mBMqtOc9Cal7LH0IZ2f_YBzxq4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
      </div>
    );
  }
}

export default App;
