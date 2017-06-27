import React from "react";
import {render} from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/Main";
import App from "./components/App";
import {Switch} from "react-router";
import WeatherApp from "./components/WeatherApp";

render(
    <Router>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/" component={App}/>
            <Route path="weather" component={WeatherApp}/>
        </Switch>
    </Router>,
    document.getElementById('container')
);
registerServiceWorker();
