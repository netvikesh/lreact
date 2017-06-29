import React from 'react';
import {render} from 'react-dom';
import {mount, shallow} from 'enzyme';
import {spy, stub, spyCall} from 'sinon';
import chai, {assert} from 'chai';
import GreeterForm from "../../components/GreeterForm";

const expect = chai.expect;


it("GreeterForm renders without crashing", () => {
    const div = document.createElement("div");
    render(<GreeterForm/>, div);
});

it("GreeterForm calls handler on input change", () => {
    const onMessageChange = spy();
    const onNameChange = spy();
    const wrapper = shallow(<GreeterForm
        onMessageChange={onMessageChange}
        onNameChange={onNameChange}
    />);
    const messageEvent = {
        target: {
            value: 'Hello'
        }
    };
    const nameEvent = {
        target: {
            value: 'David'
        }
    };
    const nameInput = wrapper.find("#name");
    const messageInput = wrapper.find("#message");
    const buttonInput = wrapper.find("button");
    const form = wrapper.find("form");
    assert.equal(wrapper.find("input").length, 2);
    wrapper.find('#name').simulate('change', nameEvent);
    assert(onNameChange.calledWith(nameEvent.target.value));
    wrapper.find('#message').simulate('change', messageEvent);
    assert(onMessageChange.calledWith(messageEvent.target.value));
    onMessageChange.reset();
    onNameChange.reset();
});

it("GreeterForm clears input values on Form Submit", () => {
    const onFormSubmit = spy();
    const event = {
        target: {},
        preventDefault: () => {
        }
    };
    // const handleSubmit = spy(GreeterForm.prototype, 'handleSubmit');
    const wrapper = mount(<GreeterForm onFormSubmit={onFormSubmit}/>);
    const instance = wrapper.instance();
    instance.refs.name.value = "Vikesh";
    instance.refs.messageValue.value = "Hello";
    assert.equal(instance.refs.name.value, "Vikesh");
    assert.equal(instance.refs.messageValue.value, "Hello");
    // assert(onFormSubmit.calledWithArgs());
    instance.handleSubmit(event);
    assert.equal(instance.refs.name.value, "");
    assert.equal(instance.refs.messageValue.value, "");
    onFormSubmit.reset();
});

it("GreeterForm form submit calls handleSubmit", () => {
    const onFormSubmit = spy();
    const event = {
        target: {},
        preventDefault: () => {
        }
    };
    // const handleSubmit = spy(GreeterForm.prototype, 'handleSubmit');
    const wrapper = mount(<GreeterForm onFormSubmit={onFormSubmit}/>);
    const instance = wrapper.instance();
    // instance.find("form");
    // onFormSubmit.reset();

});