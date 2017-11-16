//Reducers

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
	switch (action.type){
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({id}) => {
				return id !== action.id;
				});
		case 'EDIT_EXPENSE':
		 	return state.map(e => e.id === action.id ? {...e, ...action.updates} : e );
		 // case 'SORT_BY_DATE':
		 // 	return state.sort(({createdAt: a},{createdAt: b}) => a - b);
		 // case 'SORT_BY_AMOUNT':
		 // 	return state.sort(({amount: a},{amount: b}) => a - b);
		default: 
			return state;
	}
}