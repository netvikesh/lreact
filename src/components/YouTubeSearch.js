import React, {Component} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import _ from "lodash";
import * as $ from "jquery";

const YOUTUBE_API_KEY = 'AIzaSyDj5x-rqaoCTQB4eFkjKTYOUhBUlf7kcKs';


class YouTubeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next: '',
            previous: '',
            pageInfo: {},
            videos: [],
            term: props.term,
            selectedVideo: null
        };
        this.videoSearch(this.state.term);
    }

    videoSearch(term) {
        $.ajax({
            url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${YOUTUBE_API_KEY}&q=${term}&type=video`,
            method: 'GET',
            success: (data) => {
                this.setState({
                    pageInfo: data.pageInfo,
                    next: data.nextPageToken,
                    previous: data.previousPageToken,
                    videos: data.items,
                    selectedVideo: data.items[0]
                })
            }
        });

    }

    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300);
        return (
            <div className="container-fluid">
                <SearchBar
                    term={this.state.term}
                    onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    next={this.state.next}
                    previous={this.state.previous}
                    pageInfo={this.state.pageInfo}
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
        )
            ;
    }
}

YouTubeSearch.defaultProps = {
    pageInfo: '',
    term: 'something'
};

export default YouTubeSearch;