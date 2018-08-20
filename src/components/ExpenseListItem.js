import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

// stateless functional component rendering individual expense item

// can destructure ({description, amount, createdAt}) or use  props.expenses....
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>
        {description}
        </h3>
    </Link>
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
