import React, { Component } from 'react';

class VideoListItem extends Component {
  render() {
    const {video, index} = this.props;
    return(
      <section>
        <li
          className='list-group-item'
          key={index}
          onClick={ () => this.props.onVideoSelect(video) }
        >
            <div className='video-list media'>
              <div className='media-left'>
                <img className='media-object'
                  src={video.snippet.thumbnails.default.url}
                  alt={video.snippet.title}
                />
              </div>
              <div className='media-body'>
                <div className='media-heading'>
                  {video.snippet.title}
                </div>
              </div>
            </div>
          </li>
      </section>
    );
  }
}

export default VideoListItem;
