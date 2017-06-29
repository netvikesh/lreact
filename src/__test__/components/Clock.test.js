import React from 'react';
import ReactDOM,{render} from 'react-dom';
import Clock from '../../components/Clock';
import {spy} from 'sinon';
import {assert} from 'mocha';
import {shallow, mount} from 'enzyme';

jest.useFakeTimers();

test('Clock Renders correctly with intial time', () => {
    const date = new Date(123456789);
    const clockComponent = shallow(
        <Clock date={date}/>
    );
    expect(clockComponent.find("div").length).toEqual(1);
    expect(clockComponent.find("h1").length).toEqual(1);
    expect(clockComponent.find("h2").length).toEqual(1);
    expect(clockComponent.text()).toEqual("Hello World!The time is: " + date.toLocaleTimeString());
});

test('setInterval is called with 1000', ()=> {
    const date = new Date(123456789);
    const div = document.createElement("div");
    ReactDOM.render(<Clock date={date}/>, div);
    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1000);
});

/**
 * This test basically just NOTHING. Will change when I understand more of
 * Jest, React and Enzyme.
 */
it('Changes the time after 1 second', ()=>{
    jest.clearAllTimers();
    const div = document.createElement("div");
    render(
        <Clock date={new Date()}/>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});