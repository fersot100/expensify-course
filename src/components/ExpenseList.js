import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = ({expenses}) => (
	<div>
		<h1>Expense List</h1>
		{expenses.map(e => <ExpenseListItem 
			key={e.id}
		 	{...e}	
		 /> )}
	</div>
	);

const mapStateToProps = (state) => ({expenses: state.expenses}); 

export default connect(mapStateToProps)(ExpenseList);
