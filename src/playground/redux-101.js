// lecture 8 completed
import { createStore } from "redux";

// action generators

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy: incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy
  };
};

const setCount = ({ count = 0 } = {}) => {
  return {
    type: "SET",
    count: count
  };
};

const reset = () => {
  return {
    type: "RESET",
    count: 0
  };
};

// Count Reducers
// 1. Reducers are pure functions
// 2. Never state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//unsubscribe();

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(reset());

store.dispatch(setCount({ count: 100 }));
store.dispatch(decrementCount({ decrementBy: 11 }));
