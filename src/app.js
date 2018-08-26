import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { startSetExpenses } from './actions/expenses'
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);

const store = configureStore();
// store.dispatch(addExpense({description: 'water bill', amount: 500}));
// store.dispatch(addExpense({description: 'gas bill', createAt: 1000}));
// store.dispatch(addExpense({description: 'gas bill', amount: 109500}));


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
ReactDOM.render(<p>...Loading...</p>, appRoot);

store.dispatch(startSetExpenses()).then( () => {
    ReactDOM.render(jsx, appRoot);
});
