import React, {Component} from 'react';

class GreeterForm extends Component {
    handleChange(message) {
        this.props.onMessageChange(message);
        console.log(message);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleChange('');
        this.refs.messageValue.value = '';
    }

    render() {
        return (
            <form onSubmit={event => {
                this.handleSubmit(event);
            }}>
                <input type="text" className="input-sm" onChange={event => this.handleChange(event.target.value)} ref="messageValue"/>
                <textarea className="input-sm" onChange={event => this.handleChange(event.target.value)}></textarea>
                <button>Reset</button>
            </form>
        );
    }
}

export  default GreeterForm;