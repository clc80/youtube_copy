import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  render() {
    const {videos} = this.props;
    return(
      <main>
        <h1>Video List</h1>
        <ul className='col-md-4 list-group'>
          {videos.map((video, index) => {
            return (
              <VideoListItem
                video = {video}
                index = {index}
                onVideoSelect = {this.props.onVideoSelect}
               />
             )
            })}
        </ul>
      </main>
    );
  }
}

export default VideoList;
