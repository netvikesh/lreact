    import React, {Component} from "react";

    class Clock extends Component {
        constructor(props) {
            super(props);
            this.state = {
                date: this.props.date
            };

        }

        tick() {
            this.setState({
                date: new Date()
            })
        };

        render() {
            let state = this.state;
            return (
                <div>
                    <h1>Hello World!</h1>
                    <h2>The time is: {state.date.toLocaleTimeString()}</h2>
                </div>
            );
        }

        componentWillUnmount() {
            clearInterval(this.timerID);
        }

        componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(), 1000
            );
        }

    }

    Clock.defaultProps = {
        date: new Date()
    };

    export default Clock;