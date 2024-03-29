import uuid from 'uuid';
import database from '../firebase/firebase';
// action generators

// redux-thunk helps dispatching functions
// component calls action generator
// action generator returns function
// component dispatched function () 
// function runs (has the ability to dispatch other actions and do what it wants)
const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const SET_EXPENSES = 'SET_EXPENSES';

//  ADD_EXPENSE
export const addExpense = (expense) => ({
    type: ADD_EXPENSE,
    expense
});

// promise chaining
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0 

        } = expenseData;
        const expense = { description, note, amount, createdAt}
        
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};


// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: REMOVE_EXPENSE,
    id    
});

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: EDIT_EXPENSE,
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};


// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: SET_EXPENSES,
    expenses
  });
  

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
            });
        });

        dispatch(setExpenses(expenses));
        });
    };
};