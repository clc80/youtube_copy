import React, { Component } from 'react';

class VideoList extends Component {
  render() {
    return(
      <main>
        <h1>Video List</h1>
        <ul className='col-md-4 list-group'>
          {this.props.videos.map((video, index) => {
            return(
              <li key={index}> {video.snippet.title}</li>
            )
          })}
        </ul>
      </main>
    );
  }
}

export default VideoList;
