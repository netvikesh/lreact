import React from 'react';
import {render} from 'react-dom';
import NavBar from "../../components/NavBar";

it('renders without crashing',()=>{
   const div = document.createElement("nav");
   render(<NavBar/>, div);
});