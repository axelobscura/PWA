import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render the Card Component', () => {
  expect(shallow(<Card />).length).toEqual(1);
});