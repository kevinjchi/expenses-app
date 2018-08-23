import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Kostnader</div>
      <div className="show-for-desktop">Kostnad</div>
      <div className="show-for-desktop">Utgift (NOK)</div>
    </div>
      <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <p>Ingen kostnader</p>
        ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
      }
      </div>
    </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
