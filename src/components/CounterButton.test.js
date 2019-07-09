import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render the Card Component', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});