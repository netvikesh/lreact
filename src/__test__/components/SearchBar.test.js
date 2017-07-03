import React from 'react';
import {render} from 'react-dom';
import {shallow, mount} from 'enzyme';
import {spy} from 'sinon';
import {assert} from 'chai';
import SearchBar from "../../components/SearchBar";


test("SearchBar renders without Crashing",()=>{
    const div = document.createElement("div");
    render(<SearchBar/>, div);
});

test("SearchBar on change of Input, handler is called", ()=>{
    const onChangeEvent = spy();
    const wrapper = mount(<SearchBar onSearchTermChange={onChangeEvent}/>)
    const event = {
      target:{
          value: "SearchText"
      }
    };
    wrapper.find('input').simulate('change', event);
    assert(onChangeEvent.calledWith(event.target.value));
});
