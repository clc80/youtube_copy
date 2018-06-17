import React, { Component } from 'react';

class VideoListItem extends Component {
  render() {
    //This will allow us to not have to use the this.props all over.
    const {videos} = this.props;

    return(
      <section>
        {videos.map((video, index) => {

          return(
            //console.log({video})

            <li
              className='list-group-item'
              key={index}
            >
            <div className='video-list media'>
              <div className='media-left'>
                <img className='media-object'
                  src={video.snippet.thumbnails.high.url}
                />
              </div>
              <div className='media-body'>
                <div className='media-heading'>
                  {video.snippet.title}
                </div>
              </div>
            </div>
            </li>
          )
        })}
      </section>
    );
  }
}

export default VideoListItem;
