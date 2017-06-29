import React from 'react';
import {shallow, mount} from 'enzyme';
import {assert} from 'chai';
import GreeterMessage from "../../components/GreeterMessage";

it("GreeterMessage mounts without crashing", ()=>{
    const wrapper = mount(<GreeterMessage name="Vikesh"  message="Hi!"/>);
    assert.equal(wrapper.prop('name'),"Vikesh");
    assert.equal(wrapper.prop('message'),"Hi!");
});
