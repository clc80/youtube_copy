import React, { Component } from 'react';

class VideoList extends Component {
  render() {
    return(
      <main>
        <h1>Video List</h1>
        <div>
          {this.props.videos.map((video, index) => {
            return(
              <li key={index}> {video.snippet.title}</li>
            )
          })}
        </div>
      </main>
    );
  }
}

export default VideoList;
