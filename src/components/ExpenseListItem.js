import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// stateless functional component rendering individual expense item

// can destructure ({description, amount, createdAt}) or use  props.expenses....
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <h1>
        {description}
        </h1>
        <p>- {createdAt} -{amount}</p>
        <button onClick={(e) => {
            dispatch(removeExpense({ id }));
        }}>Remove item </button>
    </div>
);

// const mapStateToProps = (state) => {
//     return {
//         description: state.description,
//         amount: state.amount,
//         createdAt: state.createdAt
//     }
// };

// const ConnectExpenseListItem = connect(mapStateToProps)(ExpenseListItem);

export default connect()(ExpenseListItem);
