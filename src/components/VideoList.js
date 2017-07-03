import React from "react";
import VideoListItem from "./VideoListItem";
const VideoList = (props) => {
    const videoItems = props.videos.map((video, onVideoSelect) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                video={video}
                key={video.etag}/>
        )
    });
    return (
        <div>
            <form className="form-group">
                <h4>Total Results: {props.pageInfo.totalResults}</h4>
                <ul className="col-md-4 list-group ">
                    {videoItems}
                </ul>
                <button >{props.next}</button>
            </form>
        </div>
    );
};

export default VideoList;