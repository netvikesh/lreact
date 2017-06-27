import React from "react";
import NavBar from "./NavBar";
import YouTubeSearch from "./YouTubeSearch";
import {Route, Switch} from "react-router-dom";
import WeatherApp from "./WeatherApp";
import Home from "./Home";
import Greeter from "./Greeter";
import Clock from "./Clock";

const App = () => {
    return (
        <div className="container-fluid">
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/YouTubeSearch" component={YouTubeSearch}/>
                <Route exact path="/Weather" component={WeatherApp}/>
                <Route exact path="/Misc/Greeter" component={Greeter}/>
                <Route exact path="/Misc/HelloWorld" component={Clock}/>
            </Switch>
        </div>
    );
};

export default App;