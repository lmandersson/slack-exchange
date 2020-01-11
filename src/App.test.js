import React from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import App from './App';

test('renders page component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("[test-id='page-component']").length).toBe(1);


});
