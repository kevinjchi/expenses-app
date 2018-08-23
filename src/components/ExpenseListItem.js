import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRemoveExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';
// stateless functional component rendering individual expense item

// can destructure ({description, amount, createdAt}) or use  props.expenses....

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    

    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
                <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
            </div>
        <h3 className="list-item_data">{numeral(amount / 100).format('0,0.00')} ,- </h3>
    </Link>    
);
        // <button onClick={(e) => {
        //     dispatch(startRemoveExpense({ id }));
        // }}>Remove item </button>

// const mapStateToProps = (state) => {
//     return {
//         description: state.description,
//         amount: state.amount,
//         createdAt: state.createdAt
//     }
// };

// const ConnectExpenseListItem = connect(mapStateToProps)(ExpenseListItem);

export default connect()(ExpenseListItem);
