//section 7 lecture 8   complete
// npm run build - for webpack
// npm run serve - for live server
// npm run dev-server - only run this

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css"; // for cross browsers styles base synchronization
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

//Add Expense
store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));

store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));

store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

// Set Text filter -> bill (2 items) - water 1 item
// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 4000);

// Get visible expenses
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
