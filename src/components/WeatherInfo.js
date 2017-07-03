import React from "react";

const WeatherInfo = (props) => {
    const weather = props.weather;
    if (!weather) {
        console.log("Weather not found");
        return <div>Loading....</div>;
    }

    const format = new Intl.NumberFormat('en-GB', {
        style: 'decimal',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
    }).format;

    console.log(weather.weather.icon);
    const weatherIcon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

    console.log("Weather Found", JSON.stringify(weather));
    return (
        <div className="container-fluid col-lg-5">
            <table className="table col-sm-5">
                <tbody>
                <tr>
                    <td>Temperature</td>
                    <td>
                        <div>
                            <div><span className=""
                                       style={{color: '#0000FF'}}>Min:</span> {format((weather.main.temp_min - 273.15))} &deg;
                                C
                            </div>
                            <div><span
                                style={{color: '#FF0000'}}> Max: </span>{format((weather.main.temp_max - 273.15))} &deg;
                                C
                            </div>
                        </div>
                        <blockquote className="blockquote"
                                    style={{
                                        marginTop: -40 + 'px',
                                        marginLeft: 100 + 'px'
                                    }}>Average: {format((weather.main.temp - 273.15))} &deg;C
                        </blockquote>
                    </td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{format(weather.main.pressure / 1013.25)} atm</td>
                </tr>
                <tr>
                    <td>Condition</td>
                    <td>
                        <img src={weatherIcon}/>
                        <blockquote className="blockquote"
                                    style={{
                                        marginTop: -40 + 'px',
                                        marginLeft: 100 + 'px'
                                    }}>{weather.weather[0].main} - {weather.weather[0].description}
                        </blockquote>
                    </td>
                </tr>
                <tr>
                    <td>Lights</td>
                    <td>
                        <p>
                            <span className="glyphicon glyphicon-adjust sunrise"
                                  aria-hidden="true" ></span>&nbsp;{new Date(weather.sys.sunrise * 1e3).toTimeString()}
                        </p>
                        <p>
                           <span className="glyphicon glyphicon-adjust sunset"
                                 aria-hidden="true"></span>&nbsp;{new Date(weather.sys.sunset * 1e3).toTimeString()}
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default WeatherInfo;