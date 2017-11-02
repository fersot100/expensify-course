import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
})
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})
//Reducers

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type){
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({id}) => id !== action.id);
		case 'EDIT_EXPENSE':
		 	return state.map((e) => e.id === action.id ? {...e, ...action.updates} : e );
		default: 
			return state;
	}
}
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	}));
store.subscribe(()=> {
	console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 80000}));
const expenesTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}));
store.dispatch(removeExpense(expenseOne.expense))

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
