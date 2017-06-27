import React from 'react';
import {render} from 'react-dom';
import WeatherApp from "../../components/WeatherApp";

it('renders without crashing',()=>{
    const div = document.createElement("div");
    render(<WeatherApp/>, div);
});