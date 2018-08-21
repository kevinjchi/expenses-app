// Expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return state.concat(action.expense)  // can use spread operator [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        // hold the current
                        ...expense,
                        // save new passed in
                        ...action.updates
                    };
                } else {
                    return expense;
                };
            });
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
    
};

export default expensesReducer;