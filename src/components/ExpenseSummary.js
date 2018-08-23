import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpenseSummary = ({ expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'utgift' : 'utgifter';
    const formattedExpensesTotal = numeral(expenseTotal / 100).format('0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title"> {expenseWord} <span>{expenseCount}</span>  => kostnad på {expenseWord} <span>{formattedExpensesTotal} ,- </span></h1>
                <div className="page-header__actions">
                <Link className="button" to="/create"> Legg til </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps) (ExpenseSummary);