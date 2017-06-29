import React from 'react';
import {render} from 'react-dom';
import {shallow, mount} from 'enzyme';
import NavBar from "../../components/NavBar";


test("NavBar renders without Crashing",()=>{
    const div = document.createElement("div");
    render(<NavBar/>, div);
});