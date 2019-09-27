import { combineReducers } from 'redux';
import { actionTypes } from './actions';

function expensesReducer(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.ADD_EXPENSE:
      return [...state, payload.expense];
    case actionTypes.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload.id);
    default:
      return state;
  }
}

function budgetReducer(state = 0, { type, payload }) {
  switch (type) {
    case actionTypes.SET_BUDGET:
      return payload.budget;
    default:
      return state;
  }
}

export default combineReducers({
  expenses: expensesReducer,
  budget: budgetReducer,
});
