import React, {Component} from "react";
import GreeterMessage from "./GreeterMessage";
import GreeterForm from "./GreeterForm";
import PropTypes from 'prop-types';
class Greeter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            message: props.message
        }
    }

    render() {
        const state = this.state;
        return (
            <div>
                <GreeterMessage name={state.name} message={state.message}/>
                <GreeterForm
                    onMessageChange={(message) => this.setState({
                        message: message
                    })}

                    onNameChange={(message) => this.setState({
                        name: message
                    })}

                    onFormSubmit={() => this.setState({
                        message: Greeter.defaultProps.name,
                        name: Greeter.defaultProps.message
                    })}
                />
            </div>
        );
    }
}


Greeter.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

Greeter.defaultProps = {
    name: 'There.',
    message: 'Best Wishes.'
};

export default Greeter;