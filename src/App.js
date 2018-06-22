import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import './App.css';
const API_KEY = 'AIzaSyAsR_b87mBMqtOc9Cal7LH0IZ2f_YBzxq4';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    //onVideoSelect(selectedVideo1) {
      YTSearch({key: API_KEY, term: 'husky puppies'}, (videos) => {
        this.setState({ videos: videos, selectedVideo: videos[0] });
        console.log(videos);
      });
    //};

    //this will run when the app first runs
    //videoSelect(videos[0]);
  }

  render() {
    return (
      <div className="App">
        <Searchbar />
        <VideoDetail
          videos={this.state.videos}
          video={this.state.selectedVideo}
        />
        <VideoList
          videos= {this.state.videos}
          onVideoSelect={ selectedVideo => this.setState({selectedVideo})}
        />

      </div>
    );
  }
}

export default App;
