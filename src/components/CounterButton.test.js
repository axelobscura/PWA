import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render the CounterButton Component', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it('Correctly increments the counter', () => {
  const wrapper = shallow(<CounterButton />);
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({count:2});
})