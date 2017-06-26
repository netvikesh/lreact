import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=0`;
    return(
      <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe
                  className="embed-responsive-item"
                  src={url} frameBorder="0"
                  allowFullScreen
                  title={video.snippet.description}
              />
          </div>
          <div className="video-detail details">
              <div>{video.etag}</div>
          </div>
      </div>
    );
};

export default VideoDetail;