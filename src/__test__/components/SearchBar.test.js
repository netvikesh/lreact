import React from 'react';
import {render} from 'react-dom';
import SearchBar from '../../components/SearchBar';

it("Search Bar renders without crashing", ()=> {
   const div = document.createElement("div");
   render(<SearchBar/>, div);
});