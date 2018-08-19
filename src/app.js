import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({description: 'water bill', amount: 500}));
store.dispatch(addExpense({description: 'gas bill', createAt: 1000}));
store.dispatch(addExpense({description: 'gas bill', amount: 109500}));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('rent'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// console.log(store.getState());
const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);