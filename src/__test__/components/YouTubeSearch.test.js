import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/YouTubeSearch';
import YTSearch from 'youtube-api-search';
jest.mock(YTSearch);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Makes an API Call', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

