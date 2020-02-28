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
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
