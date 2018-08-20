import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';
// stateless functional component rendering individual expense item

// can destructure ({description, amount, createdAt}) or use  props.expenses....
numeral.locale('no');
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>
        {description}
        </h3>
    </Link>
        <p>
        {numeral(amount / 100).format('$0,0.00')} 
        - 
        {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
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
