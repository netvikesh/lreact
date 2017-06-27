import React, {Component} from "react";

class GreeterForm extends Component {
    handleMessage(message) {
        this.props.onMessageChange(message);
    }

    handleName(message) {
        this.props.onNameChange(message);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.refs.messageValue.value = '';
        this.refs.name.value = '';
    }

    render() {
        return (
            <row>
                <form className="form-horizontal" onSubmit={event => {
                    this.handleSubmit(event);
                }}>
                    <div className="form-group">
                        <label htmlFor="message" className="col-sm-2 control-label">Message</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control"
                                   onChange={event => this.handleMessage(event.target.value)}
                                   ref="messageValue" placeholder="Message" id="message"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control"
                                   onChange={event => this.handleName(event.target.value)}
                                   ref="name" id="name" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-2">
                            <button className="form-control btn-default">Reset Inputs</button>
                        </div>
                    </div>
                </form>
            </row>
        );
    }
}

export  default GreeterForm;