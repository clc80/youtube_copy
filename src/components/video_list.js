import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  render() {
    return(
      <main>
        <h1>Video List</h1>
        <ul className='col-md-4 list-group'>
          <VideoListItem videos = {this.props.videos} />
        </ul>
      </main>
    );
  }
}

export default VideoList;
