import React, {Component} from 'react';
import GreeterMessage from './GreeterMessage';
import GreeterForm from './GreeterForm';

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

                    onFormSubmit={() => this.setState({
                        message: ''
                    })}
                />
            </div>
        );
    }
}

Greeter.defaultProps = {
    name: 'Vikesh Kumar',
    message: 'Good Morning!'
};

export default Greeter;