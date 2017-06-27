import React from "react";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row col-md-9 col-sm-12 col-sm-12 col-lg-9">
                <section>
                    <blockquote>
                        Learning React
                    </blockquote>
                    <span>Here are the Things I have so far learnt and used in creating this App.</span>
                    <ul>
                        <li>Creating Components</li>
                        <li>Nesting Components</li>
                        <li>Using callbacks to change state of a component</li>
                        <li>Using Router - Since this App is hosted on Github, I have used HashRouter from <code>react-router-dom</code>
                        </li>
                    </ul>
                </section>
                <section>
                    <blockquote>What you will find here</blockquote>
                    <ul>
                        <li><a href="#YouTubeSearch">YouTubeSearch</a> - Loads a default Search Result and Loads Search Result as you type.</li>
                        <li><a href="#Weather">Weather App</a> - A Weather App</li>
                        <li><a href="#Misc/HelloWorld">Hello World</a> - A Hello World App. It also has a clock component</li>
                        <li><a href="#Misc/GreeterApp">Greeter</a> - A Form that Greets you with the message you type.</li>
                    </ul>
                </section>
            </div>
        </div>
    )
};

export  default Home;