import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

// snapshot testing of Header components

test('should render header correctly', () => {
    const wrapper = shallow( <Header /> );
    expect(wrapper.find('h1').length).toBe(1);
    // const renderer = new ReactShallowRenderer(); 
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})

test('should render header correctly', () => {
    const wrapper = shallow( <Header /> );
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer(); 
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})