import React from 'react';
import ReactDOM from 'react-dom';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description: 'water bill'}));
store.dispatch(addExpense({description: 'gas bill'}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


console.log(store.getState());
const appRoot = document.getElementById('app');
ReactDOM.render(<AppRouter />, appRoot);