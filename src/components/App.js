import React, {Component} from "react";
import Clock from "./Clock";
import SearchBar from "./SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import _ from "lodash";
import Greeter from "./Greeter";
import NavBar from "./NavBar";

const YOUTUBE_API_KEY = 'AIzaSyDj5x-rqaoCTQB4eFkjKTYOUhBUlf7kcKs';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            term: props.term,
            selectedVideo: null
        };
        this.videoSearch(this.state.term);
    }

    videoSearch(term) {
        YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div className="container-fluid">
                <Clock date={new Date()}/>
                <SearchBar
                    term={this.state.term}
                    onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
                <div className="row">
                    <Greeter/>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
  term: 'something'
};

export default App;
