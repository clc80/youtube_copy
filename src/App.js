import React, { Component } from 'react';
import Searchbar from './components/searchbar';
import YTSearch from 'youtube-api-search';
import './App.css';
const API_KEY = 'AIzaSyAsR_b87mBMqtOc9Cal7LH0IZ2f_YBzxq4';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: []
    };

    //this will run when the app first runs
    YTSearch({key: API_KEY, term: 'Learn React'}, (videos) => {
      this.setState({ videos }); //this is the same as doing {videos:videos}
    });
  }

  render() {
    return (
      <div className="App">
        <Searchbar />
      </div>
    );
  }
}

export default App;
