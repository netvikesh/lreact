import React from 'react';
import {render} from 'react-dom';
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import Greeter from "../../components/Greeter";

it('Greeter Component renders without crashing', () => {
    const initMessage = {
        name: "Vikesh",
        message: "Kumar"
    };
    const greeter = mount(<Greeter name={initMessage.name} message={initMessage.message}/>);
    const instance = greeter.instance();
    assert.equal(instance.state.name, initMessage.name);
    assert.equal(instance.state.message, initMessage.message);
});

it('GreeterComponent has required child components', () => {
    const initMessage = {
        name: "Vikesh",
        message: "Kumar"
    };
    const greeter = mount(<Greeter name={initMessage.name} message={initMessage.message}/>);
    assert.equal(greeter.find('GreeterMessage').length, 1);
    greeter.find('GreeterMessage');
    assert.equal(greeter.find('GreeterForm').length, 1);
});