import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
test("should test default state", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const newexpense = {
    id: "4",
    description: "hostel",
    note: "",
    amount: 19,
    createdAt: 0
  };

  const action = {
    type: "ADD_EXPENSE",
    expense: newexpense
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, newexpense]);
});

test("should edit an expense", () => {
  const amount = 250;

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount
    }
  };

  const state = expenseReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should edit an expense if id is not found", () => {
  const amount = 250;

  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount
    }
  };

  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
