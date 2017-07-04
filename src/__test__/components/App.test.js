import React from "react";
import {render} from "react-dom";
import App from "../../components/App";
import {HashRouter as Router} from "react-router-dom";

it("Index renders without crashing", () => {
    const div = document.createElement("div");
    render(
        <Router>
            <App/>
        </Router>, div);
});