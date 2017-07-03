import React, {Component} from "react";
import WeatherInfo from "../components/WeatherInfo";
import * as $ from "jquery";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: props.city,
            temp: '',
            apiKey: `${props.apiKey}`,
            weather: props.weather
        };
        this.__queryForWeather();
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.__queryForWeather();
    }

    __queryForWeather() {
        const URL = `//api.openweathermap.org/data/2.5/weather?APPID=${this.state.apiKey}&q=${this.state.city}`
        $.ajax({
            url: URL,
            method: 'GET',
            success: (data) => {
                console.log(data);
                this.setState({
                    weather: data
                })
            }
        });
    }

    render() {
        return (
            <div>
                <form
                    className="form-horizontal"
                    onSubmit={(event) => this.handleFormSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="message" className="col-sm-2 control-label">Enter City Name</label>
                        <div className="col-sm-2">
                            <input
                                ref='cityName'
                                className="form-control"
                                type="text"
                                placeholder="City"
                                value={this.state.city}
                                onChange={(event) => {
                                    this.setState({
                                        city: event.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="col-sm-2 control-label"></label>
                        <div className="col-sm-2">
                            <button className="form-control btn-info">Find Weather</button>
                        </div>
                    </div>
                    <WeatherInfo weather={this.state.weather}/>
                </form>
            </div>
        )
    }
}

Weather.defaultProps = {
    city: 'London',
    apiKey: '579d165965b033d92932cb95fa749175',
};

export default Weather;