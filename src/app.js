import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import AppRouter from './routers/appRouter.js';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({description: "A Rock", note: 'I found it', amount: 0}));
store.dispatch(addExpense({description: "Gas Bill", note: 'I paid it', amount: 360}));
store.subscribe(() => console.log(store.getState()));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(...visibleExpenses);

const jsx = (
<Provider store={store}>
	<AppRouter/>
</Provider>
	)


ReactDOM.render(jsx, document.getElementById('app'));