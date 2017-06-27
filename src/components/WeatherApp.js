import React from "react";
import {render} from "react-dom";

const WeatherComponent = () => {
    return(
        <div>
            <form className="form-group">
                <input className="input-group-sm" type="text"/>
                <button type="button" className="btn-default">Weather</button>
            </form>
        </div>
    )
};

export default WeatherComponent;