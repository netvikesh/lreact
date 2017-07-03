import React from 'react';
import {render} from 'react-dom';
import {shallow, mount} from 'enzyme';
import Home from "../../components/Home";

test("Home renders without Crashing",()=>{
   const div = document.createElement("div");
   render(<Home/>, div);
});