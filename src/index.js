import React from "react";
import {render} from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import {HashRouter as Router} from "react-router-dom";
import App from "./components/App";

render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('container')
);
registerServiceWorker();
