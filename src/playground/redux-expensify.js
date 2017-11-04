const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 80000, createdAt: 500}));
const expenesTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 100}));
// store.dispatch(removeExpense(expenseOne.expense))
// store.dispatch(editExpense(expenesTwo.expense, {amount: 500})
// store.dispatch(sortByDate());
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

const demoState = {
	expenses: [{
		id: 'randsndas',
		description: "January Rent",
		note: "this was the final payment for that address",
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
}
