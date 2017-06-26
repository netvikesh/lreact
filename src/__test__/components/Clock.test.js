import React from 'react';
import renderer from 'react-test-renderer';
import Clock from '../../components/Clock.js';

jest.useFakeTimers();

it('Renders Correctly', () => {
    const date = new Date(123456789);
    const tree = renderer.create(
        <Clock date={date} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Set times after 1 second', () => {
   const date = new Date(12345678);
   renderer.create(
       <Clock date={date}/>
   );
   expect(setInterval.mock.calls[0][1]).toBe(1000);
});