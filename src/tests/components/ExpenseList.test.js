import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/ExpenseListItem';


// dynamic snapshot testing

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty array', () => {
    const wrapper = shallow( <ExpenseList expenses={[]} /> );
    expect(wrapper).toMatchSnapshot();
});

